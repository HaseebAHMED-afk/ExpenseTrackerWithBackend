const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transaction');

connectDB();

const app =express();

app.use(express.json());

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions',transactions);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;



app.listen(PORT,console.log(`Server running in ${ENV} on port ${PORT}`.yellow.bold));