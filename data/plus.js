'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: plusGET
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/plus',
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
                path: '/plus',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
