const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    description:{
        type: String,
        trim: true,
        required: [true, 'Please add some description']
    },
    amount: {
        type: Number,
        required: [true, 'Please add an amount']
    },
    category: {
        type: String,
        required: [true, 'Please select a category']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction',TransactionSchema);