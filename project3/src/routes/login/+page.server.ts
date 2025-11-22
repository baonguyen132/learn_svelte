import { redirect } from "@sveltejs/kit"


interface ReturnObject {
    success: boolean;
    error: string[];
    email: string;
    password: string;
}

export const actions = {
    default: async ({ request , locals: { supabase } }) => {

        const formData = await request.formData();

        const email = formData.get('email');
        const password = formData.get('password');

        const returnObject: ReturnObject = {
            success: true,
            error: [],
            email: email.toString(),
            password: password.toString()
        }

        if (!email || !email.toString().includes('@')) returnObject.error.push('Invalid email address');
        if (!password || password.toString().length < 6) returnObject.error.push('Password must be at least 6 characters long');
        if (returnObject.error.length > 0) {
            return {
                success: false,
                message: returnObject.error
            };
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email: returnObject.email,
            password: returnObject.password,
        })
        if (error) {
            returnObject.success = false;
            returnObject.error.push(error.message);
            return {
                success: false,
                error: returnObject.error
            };
        }
        console.log("ss");
        
        

        redirect(303, "/private");
    }
}