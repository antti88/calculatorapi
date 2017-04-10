'use strict';
var dataProvider = require('../data/divide.js');
/**
 * Operations on /divide
 */
module.exports = {
    /**
     * summary: Divide calculation
     * description: /divide endpoint performs divide calculation.

     * parameters: number1, number2
     * produces: 
     * responses: 200, default
     */
    get: function divideGET(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
		 /*
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });*/
		
		var operation = "operation";
		var number1 = 0;
		var number2 = 0
		var result = 0;
		
		console.log("GET request /divide");
	
		operation = "divide";
		number1 = parseInt(req.query.number1);
		number2 = parseInt(req.query.number2);
		result = (number1 / number2);
		
		res.json({operation,number1, number2, result});
    var calctable = req.azureMobile.tables('calcvalues');

        var toBeInserted = {firstNum: number1,
                            secondNum: number2,
                            ans: result,
                            operation: operation,

                                id: ''};

        var promiseReturned = calctable.insert(toBeInserted);

        promiseReturned.then(function(data){

                console.log('insert with success!');

                next();

         },function(error){

        console.log('Found an error',error);
         });
    }
};
