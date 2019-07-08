const nodemailer = require('nodemailer');
const fs = require('fs')
let y = 0
const emails = JSON.parse(fs.readFileSync('./email-list.json', 'utf-8'))
const pass = fs.readFileSync('./pass.txt', 'utf-8')


const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'jackson.mooring@gmail.com',
		pass,
	}
});
for (let x in emails) {


	const mailOptions = {
		from: '"Jackson Mooring" <me@jacksonmooring.com>',
		to: emails[x],
		subject: 'Sending Email using Node.js',
		html: `${fs.readFileSync('./index.html', 'utf-8')}`
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
	y+=1
	console.log(y)
}