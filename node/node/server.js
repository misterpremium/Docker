'use strict';// no se pa que sirve

//var SU = require('/consultamongo');// se supone que llama a un archivo en el cual estan unas funciones. 
const express = require('express');//no entindp que queires decir con sigue
//const mongoose = require('mongoose'); //js==javascript express se supone que es javascript pero creo qeu no tienen nada que ver ya que..tiene su propia sintaxis
const bodyParser= require('body-parser')
//module.exports = mongoose;
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// Constants
const PORT = 8080;//puerto en el que escucha la app
// App
const app = express();
var MongoClient = require('mongodb').MongoClient,
test = require('assert');
var url = 'mongodb://localhost:27017/mydb';
/***************************************************/
var db= database;

app.get('/', function (req, res) {	
		res.sendfile('index.html');
});
app.get('/', (req, res) => {
  db.collection('things').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {things: result})
  })
})


	/*MongoClient.connect(url, function(err, db) {
  	var col = db.collection('things');
 	 col.find().toArray(function(err, items) {
 	  if (err) {
  	    console.log(' Error:', err);
 	   } else {
  	    console.log(items);
 	   }
	    db.close();  
 	 });
 	 });*/
/*******************************************************/
app.post('/things', (req, res) => {
  db.collection('things').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})







app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
