const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const houseSchema = new Schema({
	'street' : String,
	'number' : Number,
	'floors' : Number,
	'm2' : Number,
	'backAccess' : Boolean,
	'members' : [
		{
			type: Schema.Types.ObjectId,
			ref: 'User'
		}
	]
});

module.exports = mongoose.model('house', houseSchema);
