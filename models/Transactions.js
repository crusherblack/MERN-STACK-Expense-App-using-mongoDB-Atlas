const mongoose = require('mongoose');

const TransactionsSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [ true, 'Please add some text' ]
	},
	amount: {
		type: Number,
		required: [ true, 'Please add positive or negative number' ]
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Transaction', TransactionsSchema);
