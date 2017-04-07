'use strict';
var dataProvider = require('../data/plus.js');
/**
 * Operations on /plus
 */
module.exports = {
    /**
     * summary: Plus calculation
     * description: /plus endpoint performs plus calculation.

     * parameters: number1, number2
     * produces: 
     * responses: 200, default
     */
	 
    get: function plusGET(req, res, next) {
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
		
		console.log("GET request /plus");
	
		operation = "plus";
		number1 = parseInt(req.query.number1);
		number2 = parseInt(req.query.number2);
		result = (number1 + number2);
		
		res.json({operation,number1, number2, result});
		
    }
};
