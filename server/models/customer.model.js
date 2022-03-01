const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;
