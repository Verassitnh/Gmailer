const nodemailer = require('nodemailer');

const transport = options => {
	return nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: options.username,
			pass: options.password,
		},
	});
};

const checkOptions = options => {
	return new Promise((resolve, reject) => {
		if (!options.from) reject(new Error(`You must provide a from property`));
		else if (!options.to) reject(new Error('You must provide a to property'));
		else if (!options.subject) reject(new Error(`You must provide a subject property`));
		else if (!options.body) reject(new Error('You must provide a body property'));
		else resolve(true);
	});
};

const sendMail = options => {
	return new Promise((resolve, reject) => {
		checkOptions(options);

		if (typeof options.to === 'string') {
			transport(options).sendMail(
				{
					from: options.from,
					to: options.to,
					subject: options.subject,
					html: options.body,
				},
				(err, res) => {
					if (err) reject(new Error(err));
					else resolve(res);
				}
			);
		} else {
			if (!typeof options.email === 'object' && options.email.isArray())
				reject(new Error(`options.email should be a String or Array`));
			else {
				for (let email of options.email) {
					transport().sendMail(
						{
							from: options.from,
							to: email,
							subject: options.subject,
							html: options.body,
						},
						(err, res) => {
							if (err) reject(new Error(err));
							else resolve(res);
						}
					);
				}
			}
		}
	});
};

module.exports = sendMail;
