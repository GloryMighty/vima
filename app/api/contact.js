import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

export default async function handler(req, res) {
    console.log('API handler reached'); // Log when the handler is reached
    console.log('Request Method:', req.method); // Log the request method

    if (req.method !== 'POST') {
        console.log('Method not allowed:', req.method); // Log if method is not POST
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, subject, message } = req.body;
    console.log('Request Body:', req.body); // Log the request body

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: subject || 'New Inquiry from Contact Form',
        text: `You have received a new inquiry from ${name} (${email}):\n\n${message}\n\nPhone: ${phone}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully'); // Log success
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Error sending email' });
    }
}
