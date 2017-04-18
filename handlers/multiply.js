'use strict';
var dataProvider = require('../data/multiply.js');
/**
 * Operations on /multiply
 */
module.exports = {

    get: function multiplyGET(req, res, next) {

        console.log(' MultiPly called!');
        var calculate = require('../api/calculator');
        var operation = 'multiply';
        var token = req.get('ownAuth');
        var secretKey = '';
        var secretOk =false;
        
        var query = { sql: 'SELECT secret FROM UsersTable WHERE token=@p1', parameters: [{ name: 'p1', value: token }] };
        req.azureMobile.data.execute(query).then(function (results) {

            if (results == null || results == '') {
                
                console.log("Secret doesn't match! result null or empty");
                res.json("Please login in! redirect -> loginsite");
            }
            else {
                try {
                    console.log("Secret match!");
                    secretKey = results[0].secret;
                    console.log('Query result: '+secretKey); 
                    secretOk=true;
                    

                } catch (error) {
                    console.log("Secret doesn't match!: ", error);
                    res.json("Please login in! redirect -> loginsite");
                }
                
                 if(secretOk){
                    console.log("PUT in verify these-> secret: " + secretKey + " Token: " + token);
	           
                    calculate(req,res, next, operation, token, secretKey, function (calcresult) {
                    var calcres = calcresult;
                    console.log('calculate result: ', calcres);
                    
                    if (calcres==0){
                   res.json('Token not valid!');
                   }
                   else{
                       res.json(calcres);
                   }
                
                    });
                    
                    }else{
                        res.json("SecretKey failed!!!");
                    }
            
            } 
        });
        
                   
        
    }

};