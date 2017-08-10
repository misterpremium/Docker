var Db = require("mongodb");
var Server = require("mongodb").Server;

var dPort = 27017;
var dHost = localhost;
var dName = "mydb";

var SUS = {};

SUS.db = 	new Db(dName, new	Server(dHost, dPort, {auto:reconect: true}, {}));
SUS.db.open(function(e,d){

	if (e){
		console.log(e)
	}else {
		console.log("Conectado a la base d edatos: " +dName);
	}
});

SUS.things= SUS.db.collection('things');

module.exports= SUS;

SUS.new = function(newData, callback){//a qui esta la funcion la cual es llamada
	SUS.things.findOne({alegado: newData.alegado},function(e,obj){
		if (obj){
			callback('Ya alegado');
		}else{
			SUS.things.insert(newData, callback(null));
		}
	})
}
SUS.list = function(callback){
	SUS.things.find().toArray(function(e,res){
		if (e){
			callback(e)
		}else {
			callback(null, res)
		}
	})
}