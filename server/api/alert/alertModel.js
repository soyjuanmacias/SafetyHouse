const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const alertSchema = new Schema({
	'title' : String,
	'description' : String,
	'lat' : Number,
	'lon' : Number,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'emergencyLevel' : {
		type: String,
		enum: [
			'Muy urgente',
			'Urgente',
			'Media',
			'Baja'
		],
		default: 'sent'
	},
	'status' : {
		type: String,
		enum: [
			'sent',
			'received',
			'completed'
		],
		default: 'sent'
	},
});

module.exports = mongoose.model('alert', alertSchema);
