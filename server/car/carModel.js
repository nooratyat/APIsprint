//implement model here
var mongoose = require('mongoose');

var carSchema = new mongoose.Schema({
	name:String,
	type:String,
	
});

var car = mongoose.model('car', carSchema);

module.exports = car; 