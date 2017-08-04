const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const complaintSchema = new Schema({
	'title' : String,
	'description' : String,
	'img_url' : String,
	'lat' : Number,
	'lon' : Number,
	'date' : Date,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
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
	'hour' : Date
});

module.exports = mongoose.model('complaint', complaintSchema);
