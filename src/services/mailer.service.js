import nodemailer from 'nodemailer';
const { SMTP_HOST, SMTP_PORT, SMTP_AUTH_USER, SMTP_AUTH_PASSWORD } = process.env;

export const sendMail = async (receiver, subject, body) => {
	const transporter = nodemailer.createTransport({
		host: SMTP_HOST,
		port: +SMTP_PORT,
		auth: {
			user: SMTP_AUTH_USER,
			pass: SMTP_AUTH_PASSWORD,
		},
	});

	const info = await transporter.sendMail({
		from: SMTP_AUTH_USER,
		to: receiver,
		subject: subject,
		html: body,
	});

	console.log(info);
};
