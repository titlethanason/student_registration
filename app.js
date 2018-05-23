var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var indexRoutes = require("./routes/index");

//Authen
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require("passport-local").Strategy;
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test'
};
 
var sessionStore = new MySQLStore(options);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    //cookie: { secure: true }
  }))
app.use(passport.initialize());
app.use(passport.session());

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'test'
  });
db.connect(function(err){
    if(err)
        console.log(err);
    else   
        console.log("db connected");
})

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.query('SELECT password FROM users WHERE email = ?',[username],function(err,results,fields){
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
                        return done(null,{email : username} );
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

// app.use(function(req,res,next){
//     res.locals.isAuthenticated = req.isAuthenticated();
//     next();
// });

app.get("/",authenMiddleware(),function(req,res){
    console.log(req.user);
    console.log(req.isAuthenticated());
    var users = [];
    db.query("SELECT * FROM users", function (err, results, fields) {
        if (err) throw err;
        var temp = {
            id : results[0].id,
            email : results[0].email,
            password : results[0].password,
            role : results[0].role
        }
        users.push(temp)
        res.render("index",{"u":users});
      });
});

app.get("/register",function(req,res){
    res.render("register");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/login' })
);

app.post("/register",function(req,res){
    var id = req.body.id;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        db.query("INSERT INTO users VALUES(?,?,?,?)",[id,email,hash,role],function(err,results){
            if(err) throw err;
                console.log(results[0])
                const user = {
                    email : email,
                }
                req.login(user,function(err){
                    if(err) throw err;
                    res.redirect("/");
                });
            })
        })
      });

app.get('/logout',function(req,res){
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

passport.serializeUser(function(user, done) {
    done(null, user.email);
  });
  
passport.deserializeUser(function(user_email, done) {
    db.query("SELECT * FROM users WHERE email = ?",[user_email],function(err,results,fields){
        var user = {
            id : results[0].id,
            email : results[0].email,
            role : results[0].role
        }
        done(null, user);
    })
  });

function authenMiddleware () {  
	return (req, res, next) => {
		console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

	    if (req.isAuthenticated()) return next();
	    res.redirect('/login')
	}
}
app.listen(80, "127.0.0.1", function(){
    console.log("Server has started!");
 });