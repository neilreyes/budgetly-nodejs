const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({

});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;