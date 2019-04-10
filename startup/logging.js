'use strict';

/**
 * Created by Damiano Alves on 09/04/19
 * damiano.alves@gmail.com
 */
const { createLogger, format, transports } = require('winston');
const moment = require('moment');

const date = moment().utcOffset('-0300').format('YYYY-MM-DD HH:mm');

const logFormat = format.combine(
	format.timestamp(),
	format.printf(info => `${date} ${info.level} : ${info.message}`),
);

const logger = createLogger({

	format: logFormat,

	transports: [
		new transports.Console(),
		new transports.File({ filename: 'logging.log' })
	],
	exitOnError: false
});

module.exports = logger;
