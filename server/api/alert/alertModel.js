const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const alertSchema = new Schema({
	'title' : String,
	'description' : String,
	'lat' : Number,
	'lon' : Number,
	'emergencyLevel' : Number,
	'status' : Number
});

module.exports = mongoose.model('alert', alertSchema);
