import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // ton adresse Gmail
            pass: process.env.EMAIL_PASS, // ton mot de passe d'application
        },
    });

    const { nom, email, message } = req.body;

    await transporter.sendMail({
        from: `"Formulaire de Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // tu t'envoies le mail à toi-même
        subject: 'Nouveau message via le formulaire',
        text: `
            Nom: ${nom}
            Email: ${email}
            Message: ${message}
        `,
    });

    res.status(200).json({ message: 'Email envoyé avec succès ✅' });



    console.log('Données reçues :', nom, email, message);

    // Pour le moment on répond simplement
    return res.status(200).json({ message: 'Formulaire bien reçu' });
}