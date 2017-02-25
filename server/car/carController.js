//require the model here
var car = require('./carModel.js');

module.exports ={
	getAllcar : function (req, res) {
		  car.find({}, function(err, car) {
  if (err) throw err;
  else{
      res.status(200).send(car);
  }
  
  
})
	
	},
Getbyid:function(req,res){
 car.findOne({_id:req.params.id},function(err,car){
      if(err){
        res.send(err)
      }else{
        res.json(car)
      }
    })
},

insertCars : function (req, res) {


    var newCar = new car ({
      name : req.body.name,
     type:req.body.type
    
    });

    newCar.save(function(err, newCar){
      if(err){
        res.status(500).send(err);
      } else {
        res.status(200).send(newCar);
      };
    });
  },


//you have to use the movie model to make a new database entry 
	
//you need to use params.id to find a movie from your database
		
}