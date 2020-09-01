const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path:'./config/config.env'});

const transactions = require('./routes/transactions');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions', transactions);

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));