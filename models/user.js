//module.exports = function (app, data) {
//    var mongodb = app.drivers.mongodb;
//
//    this.table = 'users';
//    this.id = data.id || null;
//    this.firstname = data.firstname;
//    this.lastname = data.lastname;
//    this.email = data.email;
//
//
//    this.read = function (cb) {
//        var q = "SELECT id,firstname,lastname,email " + this.table + " WHERE id=" + this.id + " LIMIT 1";
//
//        mysql.query(q, function (rows) {
//            cb(rows[0]);
//        });
//    }
//
//    this.create = function (cb) {
//        var me = this;
//        me.password = bcrypt.hashSync(this.password);
//
//        var q = "INSERT INTO " + this.table + " (firstname,lastname,birthday,email,password,phone,address,zipcode,city,country,lastconnection) VALUES ( '" + this.firstname + "','" + this.lastname + "' , '" + this.birthday + "', '" + this.email + "', '" + this.password + "','" + this.phone + "','" + this.address + "','" + this.zipcode + "','" + this.city + "','" + this.country + "' ,'" + this.lastconnection + "')";
//
//        mysql.query(q, function (rows) {
//            me.id = rows.insertId;
//            cb(me);
//        });
//    }
//
//
//
//    this.delete = function (cb) {
//        var me = this,
//            q = " DELETE from " + this.table + " where id='" + this.id + "'";
//        console.log(q);
//        mysql.query(q, function (rows) {
//            me.id = rows.insertId;
//            cb(me);
//        });
//
//    }
//
//    this.update = function (data, cb) {
//        var set = []
//
//        for (k in data) {
//            set.push(k + "='" + data[k] + "'")
//        }
//
//        var q = "UPDATE " + this.table + " SET " + set.join(',') + " WHERE id=" + data.id;
//
//        var me = this;
//
//        mysql.query(q, function (rows) {
//            me.id = rows.insertId;
//            cb(me);
//        });
//
//    }
//
//    return this;
//
//}
//
//
//const insertUsers = function (db, callback) {
//    const collection = db.collection('users');
//
//    var _firstname,_lastname,_email
//
//    collection.insertMany([
//        {
//            firstname: 1
//        }, {
//            lastname: 2
//        }, {
//            email: 3
//        }
//    ], function (err, result) {
//        assert.equal(err, null);
//        assert.equal(3, result.result.n);
//        assert.equal(3, result.ops.length);
//        console.log("Inserted 3 documents into the collection");
//        callback(result);
//    });
//
//}
//
////
////
////module.exports = function (app, data) {
////    var mysql = app.drivers.mongodb;
////
////    this.table = 'users';
////    this.id = data.id || null;
////    this.firstname = data.firstname;
////    this.lastname = data.lastname;
////    this.email = data.email;
////
////
////    this.read = function (cb) {
////        var q = "SELECT id,firstname,lastname,birthday,email,phone,address,zipcode,city,country FROM " + this.table + " WHERE id=" + this.id + " LIMIT 1";
////
////        mysql.query(q, function (rows) {
////            cb(rows[0]);
////        });
////    }
////
////    this.create = function (cb) {
////        var me = this;
////        me.password = bcrypt.hashSync(this.password);
////
////        var q = "INSERT INTO " + this.table + " (firstname,lastname,birthday,email,password,phone,address,zipcode,city,country,lastconnection) VALUES ( '" + this.firstname + "','" + this.lastname + "' , '" + this.birthday + "', '" + this.email + "', '" + this.password + "','" + this.phone + "','" + this.address + "','" + this.zipcode + "','" + this.city + "','" + this.country + "' ,'" + this.lastconnection + "')";
////
////        mysql.query(q, function (rows) {
////            me.id = rows.insertId;
////            cb(me);
////        });
////    }
////
////
////
////    this.delete = function (cb) {
////        var me = this,
////            q = " DELETE from " + this.table + " where id='" + this.id + "'";
////        console.log(q);
////        mysql.query(q, function (rows) {
////            me.id = rows.insertId;
////            cb(me);
////        });
////
////    }
////
////    this.update = function (data, cb) {
////        var set = []
////
////        for (k in data) {
////            set.push(k + "='" + data[k] + "'")
////        }
////
////        var q = "UPDATE " + this.table + " SET " + set.join(',') + " WHERE id=" + data.id;
////
////        var me = this;
////
////        mysql.query(q, function (rows) {
////            me.id = rows.insertId;
////            cb(me);
////        });
////
////    }
////
////    return this;
////
////}app.models.user = require('./models/user');
