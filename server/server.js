//require express and mongoose here
//require your middleware and routes here

var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);


//=============================================================================
/*									Database								 */
//=============================================================================

mongoose.connect('mongodb://localhost/API');
	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected


//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port

app.listen( 8000,function(){

	console.log('server is listning',8000)	
});



module.exports = app;//some thing;















