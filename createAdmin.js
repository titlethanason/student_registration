var bcrypt = require('bcrypt');
var db = require("./db.js");

var password = "password"
var id = "admin_123"
var role = "admin"

bcrypt.hash(password, 10, function(err, hash) {
    db.query("INSERT INTO users VALUES(?,?,?)",[id,hash,role],function(err,results,fields){
        console.log(fields);
    });
});

