//@ts-check

'use strict';
const isDev = process.env.NODE_ENV === 'development';
const constantsPath = `./helpers/constants${isDev ? '.local' : ''}`;
const fetch = require('node-fetch');
const propx = require('propx');
const config = require('./helpers/config');
const printLog = require('./helpers/logger');
const sendSMS = require('./helpers/sendSMS');
const constants = require(constantsPath);

const { body, URL, actualStatus } = constants;

module.exports.checker = async () => {
	try {
		// @ts-ignore
		const response = await fetch(URL, config);
		const json = await response.json();
		const status = propx.get(json, 'tracking.datosGuia.PODStatusDes');

		// status debe ser diferente a ERROR
		if (!status) {
			printLog('Status viene vacio', 'error');
		}

		// Si sigue siendo sin recolectar
		if (status === actualStatus) {
			printLog(`Sigue en ${status}`, 'info');
		} else {
			printLog(`Cambió de status a ${status}`, 'info');
			await sendSMS(body.concat(status));
		}
	} catch (error) {
		printLog('catch error', 'error');
		console.log(error);
	}
};
