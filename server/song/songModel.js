var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
	name:String,
	singername:String,
	
});

var song = mongoose.model('song', songSchema);

module.exports = song; 