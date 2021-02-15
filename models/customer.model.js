const sql = require("./db.js");

// constructor
const Customer = function (customer) {
  this.userId = customer.userId,
    this.transactionDate = customer.eventCreateDate,
    this.operation = customer.operation,
    this.accountType = customer.accountType,
    this.amount = customer.amount,
    this.category = customer.category,
    this.description = customer.description

};


// find distinct account Types for each user
Customer.findAccountsById = (customerId, result) => {
  sql.query(`select distinct(accountType) from customers where userId=  ${customerId} `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.findDetailsById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE userId = ${customerId} and operation = 'Credito' limit 15 `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};




Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE userId = ${customerId} and operation = 'Credito' limit 3 `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};



module.exports = Customer;