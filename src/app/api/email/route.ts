import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: "moisoocampo@gmail.com",
            subject: `Confirmación de Email`,
            html: `<h1>Prueba</h1>`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente');
    } catch (emailError) {
        console.error('Error enviando el correo:', emailError);
    }

    return NextResponse.json({ status: 201 });
}