import { redirect} from "@sveltejs/kit"
import { fail } from "assert";

interface ReturnObject {
    success: boolean;
    error: string[];
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const actions = {
    default: async ({ request, locals: { supabase } }) => {

        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword') ;

        const returnObject: ReturnObject = {
            success: true,
            error: [],
            name: name.toString(),
            email: email.toString(),
            password: password.toString(),
            passwordConfirm: confirmPassword.toString()
        }

        if (name.length < 3 ) returnObject.error.push('Name must be at least 3 characters long');
        if (!email || !email.toString().includes('@')) returnObject.error.push('Invalid email address');
        if (!password || password.toString().length < 6) returnObject.error.push('Password must be at least 6 characters long');
        if (confirmPassword && confirmPassword.toString().length < 6) returnObject.error.push('Confirm Password must be at least 6 characters long');
        if (password !== confirmPassword) returnObject.error.push('Passwords do not match');
        if (returnObject.error.length > 0) {
            return {
                success: false,
                message: returnObject.error
            };
        }

        const {data , error} = await supabase.auth.signUp({
            email: returnObject.email,
            password: returnObject.password,
        })

        

        if(error) {
            returnObject.success = false;
            return fail(400, { success: false, error: [error.message] });
        }
        const userId = data.user.id;
        
        const { error: errorData } = await supabase.from("user_name").insert([{
            user_id: userId,
            name: returnObject.name
        }])

        if (errorData) {
            returnObject.success = false;
            console.log(errorData);
            
        }

        redirect(303, "/private/dashboard");
    }
}