import nodemailer from "nodemailer";
import { json } from "@sveltejs/kit";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms))
}


export async function POST({ request }) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hbnguyen132@gmail.com',
            pass: 'iappgvubyrxvsrqv' // KHÔNG PHẢI mật khẩu Gmail bình thường
        }
    });



    const mailOptions = {
        from: 'hbnguyen132@gmail.com',
        to: email,
        subject: 'Thank you for contacting me!',

        text: `<p>Dear ${name},</p>
               <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
               <p>Best regards,<br/>Huy Nguyen</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        return json({ message: 'Mail sent successfully' });
        
    } catch (error) {
        console.error('Error sending email:', error);
        return json({ message: 'Error sending email' }, { status: 500 });
    }
}