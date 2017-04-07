'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: divideGET
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/divide',
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
                path: '/divide',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
