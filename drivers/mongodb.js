//// MONGO SIDE
//
//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
//
//// Connection URL
//const url = 'mongodb://yomikoda:databasepasswordL33T@ds225308.mlab.com:25308/quizz-hq-webstart';
//
//
//// Database Name
//const dbName = 'quizz-hq-webstart';
//
//// Use connect method to connect to the server
//MongoClient.connect(url, function (err, client) {
//    assert.equal(null, err);
//    console.log("Connected successfully to server");
//
//    const db = client.db(dbName);
//    //
//    //    client.close();
//    //    insertDocuments(db, function() {
//    //        client.close();
//    //    });
//
//    //    insertDocuments(db, function() {
//    //        findDocuments(db, function() {
//    //            client.close();
//    //        });
//    //    });
//
//
//    insertDocuments(db, function () {
//        updateDocument(db, function () {
//            removeDocument(db, function () {
//                client.close();
//            });
//        });
//    });
//    console.log('lol');
//});
//
//
//
//
////
////const insertUsers = function (db, callback) {
////    const collection = db.collection('documents');
////
////
////    collection.insertMany([
////        {
////            firstname: 1
////        }, {
////            lastname: 2
////        }, {
////            email: 3
////        }
////    ], function (err, result) {
////        assert.equal(err, null);
////        assert.equal(3, result.result.n);
////        assert.equal(3, result.ops.length);
////        console.log("Inserted 3 documents into the collection");
////        callback(result);
////    });
////
////}
//
////const insertDocuments = function (db, callback) {
////    // Get the documents collection
////    const collection = db.collection('documents');
////    // Insert some documents
////    collection.insertMany([
////        {
////            a: 1
////        }, {
////            a: 2
////        }, {
////            a: 3
////        }
////    ], function (err, result) {
////        assert.equal(err, null);
////        assert.equal(3, result.result.n);
////        assert.equal(3, result.ops.length);
////        console.log("Inserted 3 documents into the collection");
////        callback(result);
////    });
////}
//
////const findDocuments = function(db, callback) {
////    // Get the documents collection
////    const collection = db.collection('documents');
////    // Find some documents
////    collection.find({}).toArray(function(err, docs) {
////        assert.equal(err, null);
////        console.log("Found the following records");
////        console.log(docs)
////        callback(docs);
////    });
////}
////
////const findDocuments = function (db, callback) {
////    // Get the documents collection
////    const collection = db.collection('documents');
////    // Find some documents
////    collection.find({
////        'a': 3
////    }).toArray(function (err, docs) {
////        assert.equal(err, null);
////        console.log("Found the following records");
////        console.log(docs);
////        callback(docs);
////    });
////
////}
////
////
////
////const updateDocument = function (db, callback) {
////    // Get the documents collection
////    const collection = db.collection('documents');
////    // Update document where a is 2, set b equal to 1
////    collection.updateOne({
////        a: 2
////    }, {
////        $set: {
////            b: 1
////        }
////    }, function (err, result) {
////        assert.equal(err, null);
////        assert.equal(1, result.result.n);
////        console.log("Updated the document with the field a equal to 2");
////        callback(result);
////    });
////}
////
////
////const removeDocument = function (db, callback) {
////    // Get the documents collection
////    const collection = db.collection('documents');
////    // Delete document where a is 3
////    collection.deleteOne({
////        a: 3
////    }, function (err, result) {
////        assert.equal(err, null);
////        assert.equal(1, result.result.n);
////        console.log("Removed the document with the field a equal to 3");
////        callback(result);
////    });
////}
////
//
////
////var mysql = require('mysql');
////
////module.exports = {
////
////    connection : function(){
////        return mysql.createConnection({
////            host     : 'localhost',
////            user     : 'root',
////            password : 'root',
////            port     : '/Applications/MAMP/tmp/mysql/mysql.sock',
////            database : 'testdress'
////        })
////    },
////
////    query : function(q, cb){ // q ( argument = requete SQL ' select * from - cb = callback function ==> query(SQL,f(rows){  ---   });
////        var _c = this.connection();
////
////        _c.connect();
////        _c.query(q, function(err, rows, fields) {
////            if (err) return console.error(err);
////            cb(rows);
////        });
////        _c.end();
////    }
////}
//
//
