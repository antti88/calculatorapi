// var nJwt = require('njwt');
// var tokenok = "";
// var verify = function (token,secret) {
// 	//var nJwt = require('njwt');
//     nJwt.verify(token,secret
// 			,function(err,token){
// 			  if(err){
// 				  return err;
// 				console.log('Token verification failed: ' +err);
// 			  }else{
// 				  tokenok = "Token OK";
// 				  return tokenok;
// 				console.log('Token verification success!');
// 			  }
// 			});
// }
// 
// module.exports = {
//     verify: verify
// };



module.exports =
	function (token, secret, tokenresult) {
	var tokenvalid = false;
	//console.log("verify these-> secret: " + secret + " Token: " + token);
	var nJwt = require('njwt');
    nJwt.verify(token,secret
			,function(err,token){
			  if(err){
				tokenvalid = false;			
				console.log('Token verification failed: ' +err);
			  
			  }else{
				tokenvalid = true;
				console.log('Token verification success!: ' + tokenvalid);			  
			  }
			  
			  return tokenresult(tokenvalid);
			});
	};


// Get token from "Authorization: Bearer <token>" header
//var token = req.get('Authorization');

// Get secret key from server
// ???

// Verify token with the secret key
	


// module.exports = {
//     "get": function (req, res, next) {
//     }
//     
//     
//     

