'use strict';

var transactionModel = require('../Models/TransactionModel');

exports.getDataByRate = function(req, res) {
    var transaction = req.body;

    //handles null error 
    if(!transaction.amount || !transaction.rate){
      res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  "Bad request to server."});
    }
    else{
      transactionModel.getDataByRate(transaction, function(err, response) {
        if (err)
          return res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  err});
        //res.json(auto);
        return res.status(200).json({responseCode : 200, responseMessage : "Ok", responseData :  response});
      });
    }
};
