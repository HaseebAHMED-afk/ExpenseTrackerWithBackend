const Transaction = require("../model/Transaction");

// @desc Get all transaction
// @route GET api/v1/transaction
// @access Public
exports.getTransaction = (req,res,next) => {
    res.send("GET Transactions");
}

// @desc ADD transaction
// @route POST api/v1/transaction
// @access Public
exports.addTransaction = (req,res,next) => {
    res.send("POST Transactions");
}

// @desc DELETE transaction
// @route DELETE api/v1/transaction
// @access Public
exports.deleteTransaction = (req,res,next) => {
    res.send("DELETE Transactions");
}