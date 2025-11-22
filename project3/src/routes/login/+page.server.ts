import { redirect } from "@sveltejs/kit"


interface ReturnObject {
    success: boolean;
    error: string[];
    email: string;
    password: string;
}

export const actions = {
    default: async ({ request }) => {

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
        
        redirect(303, "/private/dashboard");
    }
}