const pdf = require('html-pdf');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const generatePDF = async (htmlContent, options = {}) => {
    return new Promise((resolve, reject) => {
        pdf.create(htmlContent, options).toBuffer((err, buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buffer);
            }
        });
    });
};

const sendEmail = async (to, subject, text, attachment) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: "nalam.netclues@gmail.com",
            subject: "pdf Generated",
            text,
            attachments: [{ filename: 'report.pdf', content: attachment }],
        });

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { generatePDF, sendEmail };
