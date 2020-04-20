const fs = require('fs');
const path = require('path');

const sendFile = url => {
	let testUrl = url.split('//');

	if (testUrl[0] === 'https:' || testUrl[0] === 'http:' || testUrl[0] === 'file:' || testUrl[0] === 'ftp:') {
		return fs.readFileSync(url, 'utf-8');
	} else return fs.readFileSync(path.resolve(__dirname + url));
};

module.exports = sendFile;
