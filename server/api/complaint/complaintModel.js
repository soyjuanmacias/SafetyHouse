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
			'sent',
			'inProcess',
			'completed'
		],
		default: 'sent'
	},
	'hour' : String,
	'comment': String
});

module.exports = mongoose.model('complaint', complaintSchema);
