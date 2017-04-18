
module.exports = {
    "get": function (req, res, next) {
        
        
        console.log("GET store username and pass to db");
        
        var username = "";
        var pass = "";
        var result = "";
        
        username = req.query.username;
        pass = req.query.pass;
        
        var calctable = req.azureMobile.tables('UsersTable');
        result = "ok";
        var toBeInserted = {userName: username,
                            pass: pass,
                            result: result,                           
                                id: ''};

        var promiseReturned = calctable.insert(toBeInserted);

        promiseReturned.then(function(data){

                console.log('insert with success!');
                res.json({username,pass,result});
                next();

         },function(error){

            console.log('Found an error',error);
            res.json("ERROR!: " , error);
         });
        
    }
};
