const Transcation = require('../models/Transactions');

// @desc Get All Transcations
// @route GET /api/vi/transcations
// @access Public
exports.getTransactions = async (req, res, next) => {
	try {
		const transcations = await Transcation.find();
		return res.status(200).json({
			success: true,
			count: transcations.length,
			data: transcations
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};

// @desc Add Transcations
// @route POST /api/vi/transcations
// @access Public
exports.addTransactions = async (req, res, next) => {
	try {
		const { text, amount } = req.body;

		const transaction = await Transcation.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction
		});
	} catch (error) {
		if (error.name === 'ValidationError') {
			const messages = Object.values(error.errors).map((val) => val.message);
			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error'
			});
		}
	}
};

// @desc Delete Transcations
// @route DELETE /api/vi/transcations/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
	try {
		const transaction = await Transcation.findById(req.params.id);
		if (!transaction) {
			return res.status(404).json({
				success: false,
				error: 'No Transaction Found'
			});
		}

		await transaction.remove();
		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};
