const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction, updateTransaction } = require('../controllers/TransactionController');
//router.get('/', (req, res)=> res.send('🐖 Hello world 🐷'));
router
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

router
    .route('/:id')   
    .post(updateTransaction)
    .delete(deleteTransaction);


module.exports = router;