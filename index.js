const nodemailer = require('nodemailer');
const fs = require('fs')

const getPassword = () => {
	return fs.readFileSync('./pass.txt', 'utf-8')
}

const getList = () => {
	return JSON.stringify(fs.readFileSync('./email-list.json', 'utf-8'))
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jackson.mooring@gmail.com',
    pass: getPassword()
  }
});

const mailOptions = {
  from: '"Jackson Mooring" <me@jacksonmooring.com>',
  to: 'me@jacksonmooring@gmail.com',
  bcc: JSON.parse(getList()),
  subject: 'Sending Email using Node.js',
  html: `${fs.readFileSync('./index.html', 'utf-8')}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});