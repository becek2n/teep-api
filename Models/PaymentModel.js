'use strict';

var sql = require('../Config/db');

var PaymentModel = function(payment){
    this.PaymentCode = payment.PaymentCode;
    this.Name = payment.Name;
    this.Desc = payment.Desc;
    this.Images = payment.Images;
};

PaymentModel.getData = function (result) {
    sql.query('select * from "MasterPayment" order by "Name"', function (err, res) {             
        if(err) {
            console.log("error: ", err);
        }
        else{
            result(null, res.rows);
        }
    });   
};



module.exports = PaymentModel;
