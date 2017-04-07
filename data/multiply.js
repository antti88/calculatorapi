'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /multiply
 */
module.exports = {
    /**
     * summary: Multiply calculation
     * description: /multiply endpoint performs multiply calculation.

     * parameters: number1, number2
     * produces: 
     * responses: 200, default
     * operationId: multiplyGET
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/multiply',
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
                path: '/multiply',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
