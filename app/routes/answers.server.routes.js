'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var answers = require('../../app/controllers/answers.server.controller');

	// Answers Routes users.requiresLogin,
	app.route('/answers')
		.get(answers.list)
		.post( answers.create);

	app.route('/answers/:answerId')
		.get(answers.read)
		.put(users.requiresLogin, answers.hasAuthorization, answers.update)
		.delete(users.requiresLogin, answers.hasAuthorization, answers.delete);

	// Finish by binding the Answer middleware
	app.param('answerId', answers.answerByID);

    //Stats
    app.route('/surveyanswers/:surveyId')
        .get(answers.readBySurvey);
};
