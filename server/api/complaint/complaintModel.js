const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const complaintSchema = new Schema({
	'title' : String,
	'description' : String,
	'img_url' : String,
	'lat' : Number,
	'lon' : Number,
	'date' : String,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'status' : {
		type: String,
		enum: [
			'Enviada',
			'En proceso',
			'Completada'
		],
		default: 'Enviada'
	},
	'hour' : String,
	'comment': String
});

module.exports = mongoose.model('complaint', complaintSchema);
