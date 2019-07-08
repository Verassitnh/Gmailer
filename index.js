const nodemailer = require('nodemailer');
const fs = require('fs')
let y = 0
const emails = JSON.parse(fs.readFileSync('./email-list.json', 'utf-8'))
const pass = fs.readFileSync('./pass.txt', 'utf-8')
const config = JSON.parse(fs.readFileSync('./config.json'))


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: config.gmailUserName,
		pass,
	}
});
for (let x in emails) {


	const mailOptions = {
		from: config.from,
		to: emails[x],
		subject: config.subject,
		html: `${fs.readFileSync('./index.html', 'utf-8')}`
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}