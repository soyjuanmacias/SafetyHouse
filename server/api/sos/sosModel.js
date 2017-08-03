const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sosSchema = new Schema({
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'lat' : Number,
	'lon' : Number,
	'isEmergency' : Boolean
});

module.exports = mongoose.model('sos', sosSchema);
