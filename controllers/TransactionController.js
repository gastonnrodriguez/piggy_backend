const Transaction = require("../models/Transaction");
const objectId = require('mongoose/lib/types/objectid');
// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      error: "server error yo!",
    });
  }
};

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        error: messages,
      });
    } else {
      return res.status(500).json({
        error: "server error yo!",
      });
    }
  }
};

// @desc Update transaction
// @route PUT /api/v1/transactions/:id
// @access Public
exports.updateTransaction = async (req, res, next) => {
  try {
    const { description, amount, category } = req.body;
    const transaction = await Transaction.findOneAndUpdate(req.params.id);
    if (!transaction.ok) {
      return res.status(400).json({
        error: "No transaction found",
      });
    }

    const updateResponse = await transaction.updateOne(req.body);
    if (!updateResponse.ok) {
      return res.status(400).json({
        error: "Error updating transaction",
      });
    } else {
      return res.status(200).json({
        before: transaction,
        after: req.body,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "server error yo!",
    });
  }
};

// @desc Delete transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!objectId.isValid(req.params.id)) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
 else {
      await transaction.remove();
      return res.status(200).json({
        transaction: transaction,
        status: "successfully deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "server error yo!",
    });
  }
};
