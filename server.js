const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transaction');

connectDB();

const app =express();

app.use('/api/v1/transactions',transactions);

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;



app.listen(PORT,console.log(`Server running in ${ENV} on port ${PORT}`.yellow.bold));