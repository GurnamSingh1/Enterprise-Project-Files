const express=require('express');
var app=express();

app.get('/api/hospital',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
      var url ="mongodb://localhost:27017/";

      MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Healthcare");
      dbo.collection("Hospital").find({}).toArray( function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
  });
});

});


app.post('/api/hospital/post',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("Healthcare");
 var myobj = {Name:'Hospital6',Address:'Toronto',Phone:2344356754,hospitalid:'106'};
 dbo.collection("Hospital").insertOne(myobj, function(err, res) {
if (err) throw err;
console.log("1 document inserted into Hospital collection");

   
 });
 res.send('document inserted');
});
});



app.put('/api/Hospital/put',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
   MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("Healthcare");
   var myquery = { hospitalid: "104" };
   var newvalues = { $set: {Name: "Civil hospital", hospitalid:"140" } };
   dbo.collection("Hospital").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	res.send('document updated');
    db.close();
	
  });
});
});



app.delete('/api/Hospital/delete',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

   MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("Healthcare");
   var myquery = { Name: 'Hospital6' };
   dbo.collection("Hospital").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted from Hospital collection");
    db.close();
  });
});
});





app.get('/api/patient',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
      var url ="mongodb://localhost:27017/";

      MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Healthcare");
      dbo.collection("Patient").find({}).toArray( function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      db.close();
  });
});

});

app.post('/api/patient/post',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("Healthcare");
 var myobj = {Name:'Patient11',Address:'Brampton',Phone:6476730113,Dateadmit:'2019-29-11',Patientid:'11',hospitalid:'101',wardno:'7'};
 dbo.collection("Patient").insertOne(myobj, function(err, res) {
if (err) throw err;
console.log("1 document inserted into Patient collection");

   
 });
 res.send('document inserted');
});
});

app.put('/api/patient/put',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";
   MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("Healthcare");
   var myquery = { wardno: "2" };
   var newvalues = { $set: {Name: "Patient1", wardno:"3" } };
   dbo.collection("Patient").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	res.send('document updated');
    db.close();
	
  });
});
});

app.delete('/api/patient/delete',(req,res)=>{
var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

   MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("Healthcare");
   var myquery = { Name: 'Patient11' };
   dbo.collection("Patient").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted from Patient collection");
    db.close();
  });
});
});







const port=process.env.PORT ||8081;
app.listen(port,()=>console.log(`Listening to port ${port}..`));