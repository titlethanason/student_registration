var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var $ = require('jquery');
const saltRounds = 10;
var db = require("./db.js");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var indexRoutes = require("./routes/index");
var studentRoutes = require("./routes/student");
var adminRoutes = require("./routes/admin");
var infoRoutes = require("./routes/info");
var registerRoutes = require("./routes/register");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

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
app.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});
app.use(function(req, res, next){
    res.locals.currentPath = {path : req.path};
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
 });

//Routes
app.use(indexRoutes);
app.use(registerRoutes);
app.use(infoRoutes);
app.use(studentRoutes);
app.use(adminRoutes);

app.listen(80, "127.0.0.1", function(){
    console.log("Server has started!");
 });