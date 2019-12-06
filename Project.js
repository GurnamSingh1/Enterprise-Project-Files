const express = require('express');
const app = express();
app.use(express.json());

// Code for reading data from mongodb collection using Get method.

app.get('/api/HospitalsData', (req,res,res1) => {
	var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

   MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("The_HealthCare_Services");
  dbo.collection("Hospitals").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.send(result)
    db.close();
  });
 });
});



// code for inserting data into mongodb collections using POST method.


app.post('/api/insertHospitals', (req,res) =>{
	var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("The_HealthCare_Services");
  var myobj = {"HospitalNo":"308","HospitalName":"Child Care","Address":"GreenBre rd","City":"Ottwa","State":"Ontario"}
  dbo.collection("Hospitals").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  dbo.collection("Hospitals").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.send(result)
    db.close();
  });
});
});




// code for updating data in mongodb collections.


app.put('/api/updateHospitals', (req,res) =>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("The_HealthCare_Services");
  var myquery = { HospitalNo: "308" };
  var newvalues = { $set: {City: "Montreal", State: "Quebec" }};
  dbo.collection("Hospitals").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
  dbo.collection("Hospitals").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.send(result)
    db.close();
  });   
});
});


// code for deleting data from mongodb collections.
 
app.delete('/api/deleteHospital', (req,res) =>{
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("The_HealthCare_Services");
  var myquery = { HospitalNo: '308' };
  dbo.collection("Hospitals").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
  dbo.collection("Hospitals").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.send(result)
    db.close();
  });
});
});




const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port ${port}..'));

