import { goto } from "$app/navigation";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";
import { getContext, setContext } from "svelte";
import type { Database } from "./database.types.ts";
import { stat } from "fs";

interface UserStateProps {
    session: Session | null ;
    supabase: SupabaseClient | null ;
    user: User | null ;
    
}
export interface Book {
    author: string | null
    cover_image: string | null
    created_at: string
    description: string | null
    finished_reading_on: string | null
    genre: string | null
    id: number
    rating: number | null
    started_reading_on: string | null
    title: string | null
    user_id: string
}

// type UpdatableBookFields = Partial<Omit<Book, 'id' | 'user_id' | 'created_at'>>;

export class UserState {
    session = $state<Session | null>(null);
    supabase = $state<SupabaseClient<Database> | null>(null);
    user = $state<User | null>(null);
    allBooks = $state<Book[]>([]);
    username = $state<string | null>(null);

    constructor(data: UserStateProps) {
        this.updateState(data);
    }

    async fetchUserData() {
        if(!this.user || !this.supabase) return;
        

        const userId = this.user.id;

        const [booksResponse , userNameResponse] = await Promise.all([
            this.supabase.from('books').select("*").eq('user_id', userId) ,
            this.supabase.from('user_name').select('name').eq("user_id" , userId).single()
        ])

        if(booksResponse.error || userNameResponse.error || !booksResponse.data || !userNameResponse.data) {
            console.log("Error fetching user data:", {booksError: booksResponse.error , userNameError: userNameResponse.error});
            return;
        }

        this.allBooks = booksResponse.data || []
        this.username = userNameResponse.data.name || null;
    }


    updateState(data: UserStateProps) {
        this.session = data.session;
        this.supabase = data.supabase;
        this.user = data.user;
        this.fetchUserData();
    }

    // async updateBooks(id_book:number, updateObject: UpdatableBookFields) {
    //     if(!this.supabase) return;
        
    //     const {status , error} = await this.supabase.from('books').update(updateObject).eq('id' , id_book);

    //     if(status === 204 && !error) {
    //         $inspect(status)
    //     }
    // }

    getHighestRatedBooks() {
        if (!this.allBooks) return [];

        return this.allBooks.filter(book => book.rating).toSorted((a , z ) => z.rating! - a.rating!).slice(0 , 9);
    }

    getUnreadBooks() {
        if (!this.allBooks) return [];
        return this.allBooks.filter(book => !book.finished_reading_on).toSorted((a , z ) => new Date(z.created_at).getTime() - new Date(a.created_at).getTime()).slice(0 , 9);
    }

    getFavouriteGenres() {
        
    }

    async logout() {
        await this.supabase?.auth.signOut();
        goto("/login")
    }
}

const USER_STATE_KEY = Symbol('UserState');

export function setUserState(data: UserStateProps) {
    return setContext(USER_STATE_KEY, new UserState(data))
}

export function getUserState() {
    return getContext<ReturnType<typeof setUserState>>(USER_STATE_KEY);
}