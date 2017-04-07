'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /minus
 */
module.exports = {
    /**
     * summary: Minus calculation
     * description: /minus endpoint performs minus calculation.

     * parameters: number1, number2
     * produces: 
     * responses: 200, default
     * operationId: minusGET
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/minus',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/minus',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
