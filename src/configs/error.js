'use strict';

/**
 * Created by Damiano Alves on 09/04/19
 * damiano.alves@gmail.com
 */

let errors = {};

errors.INTERNAL_ERROR = {
	error: {
		status : 500,
		code: 'IEx0001',
		title: 'Internal server error',
		detail: 'There was an unknown internal server error.'
	}
};

errors.FATAL_ERROR = {
	error: {
		status : 500,
		code: 'IEx0002',
		title: 'Fatal error',
		detail: 'There was an unknown error.'
	}
};

errors.METHOD_NOT_ALLOWED = {
	error: {
		status : 405,
		code: 'MNAx0001',
		title: 'Method not allowed',
		detail: 'This method is not allowed for this request.'
	}
};

errors.API_KEY_NOT_FOUND = {
	error: {
		status : 401,
		code: "UNx0001",
		title: "X-api-key not found",
		detail: "There is no api key token in the request's headers."
	}
};

errors.API_KEY_FAIL = {
	error: {
		status : 401,
		code: "UNx0004",
		title: "Api key unauthorized",
		detail: "The application has no authorization to this request."
	}
};

module.exports = errors;
