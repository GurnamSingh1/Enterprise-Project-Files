var http = require('http');
var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
app.use

var url = 'mongodb://localhost:27017/Healthcare';

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('Hospital').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);

        }, function() {
            db.close();
            res.render('index', { items: resultArray });
        });
    });
});

router.get('/insert', function(req, res, next){
 var item={
   name: req.body.title,
   content: req.body.content,
   author: req.body.author
 };

  mongo.connect(url, function(err,db){
   assert.equal(nukll,err);
   db.collection('Healthcare').insertOne(item, function(err, result){
     assert.equal(null,error);
     console.log('Item inserted');
     db.close();
   });
  });
  res.redirect('/');
  });

router.get('/update', function(req, res, next){
 var item={
   name: req.body.title,
   content: req.body.content,
   author: req.body.author
 };
  var id = req.body.id;

  mongo.connect(url, function(err,db){
   assert.equal(nukll,err);
   db.collection('Healthcare').updateOne({"_id": objectId(id)},{$set: item}, function(err, result){
     assert.equal(null,error);
     console.log('Item updated');
     db.close();
   });
  });
 });

 router.post('/delete', function(req,res,next){
   var id = req.body.id;

   mongo.connect(url, function(err,db){
   assert.equal(nukll,err);
   db.collection('Healthcare').deleteOne({"_id": objectId(id)}, function(err, result){
     assert.equal(null,error);
     console.log('Item deleted');
     db.close();
   });
  });
 });

module.exports= router;