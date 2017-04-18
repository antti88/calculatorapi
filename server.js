'use strict';

 var port = process.env.PORT || 8000; // first change

 var http = require('http');
 var express = require('express');
 var bodyParser = require('body-parser');
 var swaggerize = require('swaggerize-express');
 var swaggerUi = require('swaggerize-ui'); // second change
 var path = require('path'),
    app = require('express')(),
    mobileApps = require('azure-mobile-apps'),
    configuration = require('azure-mobile-apps/src/configuration'),
    mobileApp,

    config = {
        skipVersionCheck: true,
        pageSize: 1000,
        //auth: { secret: 'secret' }
    };

mobileApp = mobileApps(config);

// tables
mobileApp.tables.add('calcvalues',{autoIncrement: true, columns: { firstNum: 'string', secondNum: 'string', operatin: 'string', ans: 'string', userName: 'string'} });
mobileApp.tables.add('UsersTable',{columns: { userName: 'string', pass: 'string', result: 'string', token: 'string', secret: 'string'} });
mobileApp.tables.import('tables');

app.use(mobileApp);

 var server = http.createServer(app);

 app.use(bodyParser.json());

 app.use(swaggerize({
     api: path.resolve('./config/swagger.json'), // third change
     handlers: path.resolve('./handlers'),
     docspath: '/swagger' // fourth change
 }));

 // change four
 app.use('/docs', swaggerUi({
   docs: '/swagger'  
 }));
 mobileApp.api.import('./api');

 server.listen(port, function () { 
 console.log("server running on port: " +port);// fifth and final change
 });