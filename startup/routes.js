'use strict';

/**
 * Created by Damiano Alves on 09/04/19
 * damiano.alves@gmail.com
 */
const user = require('../src/routes/user');
const login = require('../src/routes/login');
const resfresh = require('../src/routes/refresh');
const email = require('../src/routes/email');
const address = require('../src/routes/hours');
const council = require('../src/routes/council');
const country = require('../src/routes/country');
const country_code = require('../src/routes/country_code');
const speciality = require('../src/routes/speciality');
const state = require('../src/routes/state');
const phone = require('../src/routes/phone');
const search = require('../src/routes/search');
const city = require('../src/routes/city');
const provider_details = require('../src/routes/provider_details');
const schedules_available = require('../src/routes/schedules_available');

// Config
const authorization = require('../middleware/app_authorization');
const error = require('../config/error');

module.exports = function (app) {

    app.use('/users', authorization, user);
	app.use('/auth', authorization, login);
	app.use('/auth/refresh', authorization, resfresh);
	app.use('/email', authorization, email);
	app.use('/addresses', authorization, address);
	app.use('/councils', authorization, council);
	app.use('/countries', authorization, country);
	app.use('/country_code', authorization, country_code);
	app.use('/specialities', authorization, speciality);
	app.use('/states', authorization, state);
	app.use('/phones', authorization, phone);
	app.use('/search', authorization, search);
	app.use('/cities', authorization, city);
	app.use('/provider/details', authorization, provider_details);
	app.use('/schedules_available', authorization, schedules_available);
	
	app.use('*', function(req, res) {
		res.status(error.METHOD_NOT_ALLOWED.error.status).send(error.METHOD_NOT_ALLOWED);
	});
};