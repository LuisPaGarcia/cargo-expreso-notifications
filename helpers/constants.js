//@ts-check
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const from = process.env.FROM;
const to = process.env.TO;
const body = process.env.BODY;
const base = process.env.URL;
const guia = process.env.GUIA;
const time = process.env.TIME;
const client = require('twilio')(accountSid, authToken);
const URL = ''.concat(base, guia, time);
const actualStatus = 'En Ruta';

module.exports = {
	from,
	to,
	body,
	client,
	URL,
	actualStatus
};
