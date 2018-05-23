var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var db = require("./db.js");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var indexRoutes = require("./routes/index");
var studentRoutes = require("./routes/student");
var adminRoutes = require("./routes/admin");

//Authentication
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'studentregis'
};
var sessionStore = new MySQLStore(options);
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    //cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
    function(username, password, done) {
        db.query('SELECT password FROM users WHERE username = ?',[username],function(err,results,fields){
            if(err) {done(err)};

            if(results.length === 0){
                done(null,false);
            }
            else{
                const hash = results[0].password.toString();
                
                console.log(hash);
                console.log(username);

                bcrypt.compare(password,hash,function(err,res){
                    if(res == true){
                        console.log("Success to connect!!");
                        return done(null,username );
                    }
                    else{
                        console.log("failed to connect!!");
                        return done(null,false);
                    }   
                });
            }
        })
    }
));
passport.serializeUser(function(username, done) {
    done(null, username);
  }); 
passport.deserializeUser(function(username, done) {
    db.query("SELECT username,role FROM users WHERE username = ?",[username],function(err,results,fields){
        var user = {
            username : results[0].username,
            role : results[0].role
        }
        done(null, user);
    })
  });


//Routes
app.use(indexRoutes);
app.use(studentRoutes);
app.use(adminRoutes);

app.listen(80, "127.0.0.1", function(){
    console.log("Server has started!");
 });