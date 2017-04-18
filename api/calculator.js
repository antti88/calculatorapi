
'use strict';
//var dataProvider = require('../data/multiply.js');
/**
 * Operations on /multiply
 */
module.exports = 

    function (req, res, next,operation,token,secretKey, calcresult) {

        //var token = 'notset';
        var username = 'notset';
        //token = req.get('ownAuth');
        //calcresult = "Something went wrong";
        //console.log('TOKEN is: ' + token);
        var verifythis = require('../api/verifytoken');
        var calctable = req.azureMobile.tables('calcvalues');
        
        //console.log("verify these->"+"Operation " + operation + "secret: " + secretKey + " Token: " + token);
	
        verifythis(token, secretKey, function (tokenresult) {
            console.log('verify returned: ' + tokenresult);
              
              if (tokenresult) {
                   //var operation = "operation";
                        var number1 = 0;
                        var number2 = 0;
                        var result = 0;
                        var calcrescurrent = 0;
                        console.log("GET request calculator: " + operation);
                        //operation = "multiply";
                        number1 = parseInt(req.query.number1);
                        number2 = parseInt(req.query.number2);
                        
                        switch(operation) {
                                case "plus":
                                result = (number1 + number2);
                                 break;
                                case "divide":
                                result = (number1 / number2);
                                break;
                                case "minus":
                                result = (number1 - number2);
                                break;
                                case "multiply":
                                result = (number1 * number2);
                                break;
                                default:
                                result = (number1 + number2);
                        }                    
                                            
                            calcrescurrent = (result);
                        //res.json({ operation, number1, number2, result });
                        
                        var query = { sql: 'SELECT userName FROM UsersTable WHERE token=@p1', parameters: [{ name: 'p1', value: token }] };
                        req.azureMobile.data.execute(query).then(function (results) {
                            try {
                                username = results[0].userName;
                                console.log("username= " + results[0].userName);
                                
                                console.log("Calctable insert start:");
                            var toBeInserted = {
                                firstNum: number1,
                                secondNum: number2,
                                ans: result,
                                operation: operation,
                                userName: username,
                                id: ''
                            };

                            var promiseReturned = calctable.insert(toBeInserted);
                            console.log("Calctable insert Stop:");
                            promiseReturned.then(function (data) {
                                console.log('insert with success!');
                                next();
                                
                            }, function (error) {
                                console.log('Found an error', error);
                            });
                                
                            } catch (error) {
                                res.json('cant get username');
                            }
                            
                            return calcresult(calcrescurrent);
                        });                       
                    }
                    else {
                        console.log('TOKEN NOT VALID PLUS!:');
                        calcrescurrent = 0;
                        return calcresult(calcrescurrent);
                    }

                    
                    
                });
                
                
                
            };




