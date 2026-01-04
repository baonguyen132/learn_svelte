import type { PageLoad } from "./$types.js";

export const load: PageLoad = async ({parent, params} ) => {
    let { supabase } = await parent() ;

    const { book_id } = params ;
    
    const { data: bookData , error } = await supabase.from('books').select("*").eq('id' , Number(book_id)).single();
    
    if(error || !bookData) {
        console.log("Error fetching book data:", error);
        return { bookData: null }
    }

    return { bookData }
}