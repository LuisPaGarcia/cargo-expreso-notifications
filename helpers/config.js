const isDev = process.env.NODE_ENV === 'development';
const constantsPath = `./constants${isDev ? '.local' : ''}`;
const constants = require(constantsPath);
const guia = constants.guia; //'guia=3W201915324';

module.exports = {
	headers: {
		accept: 'application/json, text/javascript, */*; q=0.01',
		'accept-language': 'en-US,en;q=0.9,es;q=0.8',
		'cache-control': 'no-cache',
		pragma: 'no-cache',
		'sec-fetch-dest': 'empty',
		'sec-fetch-mode': 'cors',
		'sec-fetch-site': 'cross-site'
	},
	referrer: `https://www.cargoexpreso.com/tracking/?${guia}`,
	referrerPolicy: 'no-referrer-when-downgrade',
	body: null,
	method: 'GET',
	mode: 'cors'
};
