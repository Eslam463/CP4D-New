const { json } = require("body-parser");
const Customer = require("../models/customer.model.js");


exports.findAccountsById = (req, res) => {
  Customer.findAccountsById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else {

      //res.send({cname:data.name,cemail :data.email})
      //res.send(data)

      res.render('cat_account', { result: data })

    }
  });
};



exports.findDetailsById = (req, res) => {
  Customer.findDetailsById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else {

      //res.send({cname:data.name,cemail :data.email})
      //res.send(data)

      res.render('more_details', { result: data })

    }
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else {

      //res.send({cname:data.name,cemail :data.email})

      res.render('customer', { result: data })

    }
  });

};



