var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jackson.mooring@gmail.com',
    pass: 'nvwaznipfnakjcob'
  }
});

var mailOptions = {
  from: '"Jackson Mooring" <me@jacksonmooring.com>',
  to: 'dudef@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});