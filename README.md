# Gmailer

> Interact with the Gmail API

## API

### `sendMail(options)`

`options: <Object>`

All options are required

| Option    | Type                        | Description                       |
| :-------- | :-------------------------- | :-------------------------------- |
| `from`    | `String`                    | Senders email address             |
| `to`      | `String`, `List` or `Array` | Who to send the email to.         |
| `subject` | `String`                    | Subject of the email              |
| `body`    | `String`                    | Body of the email. Accepts `html` |

Example:

```javascript
const { sendMail } = require('gmail-api');

sendMail({
	from: '"John Doe" <john@doe.com>',

	// <Array> Sends an individual email to each person.

	// <List> Sends one email to all recipients
	// (e. g. 'my@email.com, your@email.com')

	// <String> Send one email to the recipient
	// (e. g. 'my@email.com')
	to: ['myfriend@yahoo.com', 'yourfriend@hotmail.com'],
	subject: 'Node.js Email',

	// `file(url)` Sends the contents of the file url
	body: file('../email.html'),
});
```

### `file(url)`

`url: <String> or <Url>`

Sends the contents of the url.

```javascript
// Accepts absolute and relative paths
file('https://example.com/myfile.html');
file('../myfile.js');
```

Full docs avaliable at [Docs](https://docs.jacksonmooring.com/gmailer)
