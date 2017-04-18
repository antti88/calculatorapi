
module.exports = {
    
    "get": function (req, res, next) {
        console.log("Login called!");
        
        var username = "";
        var pass = "";
        var usernameresult = "";
        var passresult = "";
        var token = "";
        var uuidV4 = require('uuid/v4');
        var verifythis = require('./verifytoken');
        var secretKey = uuidV4();
        console.log('Secret key: '+secretKey);
        username = req.query.username;
        pass = req.query.pass;
        
        var claims = {
            sub: username,
            iss: 'https://myapp.com',
            permissions: 'write'
        };
        
        
        
        
        var query = { sql: 'SELECT * FROM UsersTable WHERE userName=@p1 AND pass=@p2', parameters: [{ name: 'p1', value: username },{name:'p2',value:pass}] }; 
        req.azureMobile.data.execute(query).then(function (results) {
            
            console.log(results); 
            //res.send({ some: results }); 
            // Generate JWT object (token)
            var nJwt = require('njwt');
            var jwt = nJwt.create(claims,secretKey);
            console.log('JWT: '+jwt);

            // Compact the JWT object with Base64 to get the actual token
            token = jwt.compact();
            console.log('Token: '+token);
            
            res.setHeader('ownAuth', token);
            res.json("Token! " + JSON.stringify(token));
            var ownouthresult = req.get('ownAuth');
            console.log("ownAuth= " + ownouthresult);
            
            
            var querytoken = { sql: 'UPDATE UsersTable SET token=@p2, secret=@p3 WHERE userName=@p1',  parameters: [{ name: 'p1', value: username },{name:'p2',value:token},{name:'p3',value:secretKey}] }; 
             req.azureMobile.data.execute(querytoken);},
            
             
            
        function(error){
             console.log('Found an error: ', error); 
             });
             
        //req.headers['ownAuth'] = token;
        
    }
    
    
    
      
};
