//you need to require some files here
var songController = require('../song/songController.js');

var carController = require('../car/carController.js');


module.exports = function (app, express) {

//=============================================================================
/*								car route									 */
//=============================================================================
	
	app.post('/api/car/instercars', carController.insertCars);
	app.get('/api/car/getAll', carController.getAllcar);
	app.get('/api/car/Getbyid/:id', carController.Getbyid);
	//here you have to add two more routes
	
//=============================================================================
/*								song route									 */
//=============================================================================
	app.post('/api/song/insterbooks', songController.insertSongs);
	app.get('/api/song/getAll', songController.getAll);
	app.get('/api/song/Getbyid:id', songController.Getbyid);
	//here you have to add two more routes

};

