import { json } from "@sveltejs/kit";

export async function POST ({ request }) {
    const data = await request.json() ;

    console.log('Creating account for:', data);

    return json({message: "Account created successfully"})
}
export async function GET ({ params }) {
    return json({message: "This is the create-account endpoint"})
}