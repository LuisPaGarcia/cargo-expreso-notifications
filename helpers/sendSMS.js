//@ts-check
const isDev = process.env.NODE_ENV === 'development';
const constantsPath = `./constants${isDev ? '.local' : ''}`;
const constants = require(constantsPath);

const { from, to, client } = constants;

module.exports = async function sendSMS(body) {
	return await client.messages.create({ body, from, to });
};
