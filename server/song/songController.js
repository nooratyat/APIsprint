//require files here
var song = require('./songModel.js');

module.exports ={
	insertSongs : function (req, res) {

//console.log(req.body)
for (var i = 0; i < req.body.length; i++) {

  var newSong = new song ({

    name : req.body[i].name,
    singername:req.body[i].singername
    
  });

  newSong.save(function(err, newSong){
    if(err){
      res.status(500).send(err);
    } 

  })

}   
 res.status(200).send(newSong);   

},
Getbyid:function(req,res){
 song.findOne({_id:req.params.id},function(err,song){
  if(err){
    res.send(err)
  }else{
    res.json(song)
  }
})
},

getAll: function (req, res) {

  song.find({}, function(err, song) {
    if (err) throw err;
    else{
      res.status(200).send(song);
    }


  })
},

}

	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
	
