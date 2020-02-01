'use strict';
const db = require("../Models");
const sequelize = db.sequelize;
const TransactionBuyDetail = db.TransactionBuyDetail;
const TransactionBuy = db.TransactionBuy;

//transaction header
exports.findRate = (req, res) => {
  var transaction = req.body;

  sequelize.query('SELECT * FROM "funcTransactionFindByRate"(:amount, :rate)',
    {
      replacements: {
        amount: transaction.amount,
        rate: transaction.rate
    }
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data[0]});
  })
  .catch(err => {
  res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.findAll = (req, res) => {
  TransactionBuy.findAll({ 
    raw: true,
    include: [{
      model: TransactionBuyDetail
    }]
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.findOne = (req, res) => {
  const transactionCode = req.params.code;
  TransactionBuy.findAll({ 
    where: {
      TransactionCode: transactionCode
    }
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.create = (req, res) => {
  var transaction = req.body;
  //handles null error 
  if(!transaction.transactionCode || !transaction.currencyCode || !transaction.paymentCode 
      || !transaction.locationCode || !transaction.pickupCode || !transaction.userName 
      || !transaction.rateTotal || !transaction.volumeTotal){
    res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  "Bad request to server."});
    return;
  }

  transactionModel = {
    TransactionCode: transaction.transactionCode,
    CurrencyCode: transaction.currencyCode,
    PaymentCode: transaction.paymentCode,
    LocationCode: transaction.transactionCode,
    PickupCode: transaction.pickupCode,
    UserName: transaction.userName,
    RateTotal: transaction.rateTotal,
    VolumeTotal: transaction.volumeTotal,
  }
  // Save Tutorial in the database
  TransactionBuy.create(transactionModel)
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
    })
    .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
};

//transactaion detail

exports.findDetailByCode = (req, res) => {
  const transactionCode = req.params.code;

  TransactionBuyDetail.findAll({
    where: {
      TransactionCode: transactionCode
    } 
  })
  .then(data => {
    res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
  })
  .catch(err => {
    res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
  });
};

exports.createDetail = (req, res) => {
  var transaction = req.body;
  //handles null error 
  if(!transaction.TransactionCode || !transaction.UIDWallet || !transaction.Amount || !transaction.Rate){
    res.status(500).json({responseCode : 500, responseMessage : "Error", responseData :  "Bad request to server."});
    return;
  }

  // Save Tutorial in the database
  TransactionBuyDetail.create(transaction)
    .then(data => {
      res.status(200).json({responseCode: 200, responseMessage: "Ok", responseData: data});
    })
    .catch(err => {
      res.status(500).json({responseCode: 500, responseMessage: "error", responseData: err.message});
    });
};
