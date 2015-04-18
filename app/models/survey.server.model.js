'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Survey name',
		trim: true
	},
    question1: {
		type: String,
		default: '',
		required: 'Please fill Survey Question 1',
		trim: true
	},
    ans1Option1: {
		type: String,
		default: '',
		required: 'Please fill Option 1 for Question 1',
		trim: true
	},
    ans1Option2: {
		type: String,
		default: '',
		required: 'Please fill Option 2 for Question 1',
		trim: true
	},
    ans1Option3: {
		type: String,
		default: '',
		trim: true
	},
    question2: {
		type: String,
		default: '',
		required: 'Please fill Survey Question 2',
		trim: true
	},
    ans2Option1: {
		type: String,
		default: '',
		required: 'Please fill Option 1 for Question 2',
		trim: true
	},
    ans2Option2: {
		type: String,
		default: '',
		required: 'Please fill Option 2 for Question 2',
		trim: true
	},
    ans2Option3: {
		type: String,
		default: '',
		trim: true
	},
    question3: {
		type: String,
		default: '',
		required: 'Please fill Survey Question 3',
		trim: true
	},
    ans3Option1: {
		type: String,
		default: '',
		required: 'Please fill Option 1 for Question 3',
		trim: true
	},
    ans3Option2: {
		type: String,
		default: '',
		required: 'Please fill Option 2 for Question 3',
		trim: true
	},
    ans3Option3: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);
