var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");
var crypto = require("crypto")

//try ajax
router.get("/orders",function(req,res){
    var temp = [{name : "AJAX"},{id : 111}];
    console.log("send fuck you !!!!!");
    console.log(req.query.ajaxData[0]);
    res.send(temp);
})

// Welcome Remaining : Student , Teacher , TA
router.get("/",middleware.isLoggedInWelcome,function(req,res){
    console.log(req.user);
    console.log(req.isAuthenticated());
    var users = [];
    var rand = crypto.randomBytes(20).toString('hex');
    console.log(rand);
    db.query("SELECT * FROM users WHERE role = ? ",[req.user.role], function (err, results, fields) {
        if (err) throw err;
        for(var i = 0 ;i < results.length;i++){
            const temp = {
                username: results[i].username,
                role : results[i].role
            }
            users.push(temp)
        }
        res.render("index",{u:users});
    });
});

// teachTable Remaining : Teacher , TA
router.get("/teachTable",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "teacher"){
        var qttMon = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Monday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttTue = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Tuesday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttWed = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Wednesday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttThu = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Thursday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttFri = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Friday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttSat = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Saturday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        var qttSun = "SELECT * FROM schedule sc,section s,subject sj,teacherteach tt,teacher t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND sc.day = 'Sunday' AND tt.teacherID = ? ORDER BY sc.timeStart,sc.section";
        db.query(qttMon,[req.user.username] ,function(err, result) {
            if(err){
                throw err;
            } else {
                    var obj = {};
                    obj = {mon: result};
                    db.query(qttTue,[req.user.username],function(err2,result2){
                            if(err2) throw err2;
                            obj = {tue: result2};
                            db.query(qttWed,[req.user.username],function(err3,result3){
                                    if(err3) throw err3;
                                    obj = {wed: result3};
                                    db.query(qttThu,[req.user.username],function(err4,result4){
                                            if(err4) throw err4;
                                            obj = {thu: result4};
                                            db.query(qttFri,[req.user.username],function(err5,result5){
                                                    if(err5) throw err5;
                                                    obj = {fri: result5};
                                                    db.query(qttSat,[req.user.username],function(err6,result6){
                                                            if(err6) throw err6;
                                                            obj = {sat: result6};
                                                            db.query(qttSun,[req.user.username],function(err7,result7){
                                                                    if(err7) throw err7;
                                                                    obj = {sun: result7};
                                                                    obj.mon = result;
                                                                    obj.tue = result2;
                                                                    obj.wed = result3;
                                                                    obj.thu = result4;
                                                                    obj.fri = result5;
                                                                    obj.sat = result6;
                                                                    obj.sun = result7;
                                                                    res.render("teachTable", obj);
                                                            }  );
                                                    }  );
                                            }  );
                                    }  );
                            }  );
                    });              
            }
        });
    }
    else if(req.user.role == "ta"){
        var qttMon = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Monday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttTue = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Tuesday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttWed = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Wednesday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttThu = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Thursday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttFri = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Friday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttSat = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Saturday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        var qttSun = "SELECT * FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t WHERE sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND tt.subject = s.subject AND tt.section = s.section AND tt.ID = t.ID AND sc.day = 'Sunday' AND tt.ID = ? ORDER BY sc.timeStart,sc.section";
        db.query(qttMon,[req.user.username] ,function(err, result) {
            if(err){
                throw err;
            } else {
                    var obj = {};
                    obj = {mon: result};
                    db.query(qttTue,[req.user.username],function(err2,result2){
                            if(err2) throw err2;
                            obj = {tue: result2};
                            db.query(qttWed,[req.user.username],function(err3,result3){
                                    if(err3) throw err3;
                                    obj = {wed: result3};
                                    db.query(qttThu,[req.user.username],function(err4,result4){
                                            if(err4) throw err4;
                                            obj = {thu: result4};
                                            db.query(qttFri,[req.user.username],function(err5,result5){
                                                    if(err5) throw err5;
                                                    obj = {fri: result5};
                                                    db.query(qttSat,[req.user.username],function(err6,result6){
                                                            if(err6) throw err6;
                                                            obj = {sat: result6};
                                                            db.query(qttSun,[req.user.username],function(err7,result7){
                                                                    if(err7) throw err7;
                                                                    obj = {sun: result7};
                                                                    obj.mon = result;
                                                                    obj.tue = result2;
                                                                    obj.wed = result3;
                                                                    obj.thu = result4;
                                                                    obj.fri = result5;
                                                                    obj.sat = result6;
                                                                    obj.sun = result7;
                                                                    res.render("teachTable", obj);
                                                            }  );
                                                    }  );
                                            }  );
                                    }  );
                            }  );
                    });              
            }
        });
    }
    else{
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in teachTable ");
        res.redirect("/");
    }
});


// info : Teacher , TA
router.get("/infoTeacher",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "teacher"){
        var qinfo = "SELECT * FROM teacher WHERE teacherID = ? ";
        db.query(qinfo,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {tinfo: result};
            obj.tinfo = result;
            res.render("infoTeacher",obj);
        });
    }
    else if(req.user.role == "ta"){
        var qinfo = "SELECT * FROM teacherassistant WHERE ID = ? ";
        db.query(qinfo,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {tinfo: result};
            obj.tinfo = result;
            res.render("infoTeacher",obj);
        });
    }
    else{
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in infoTeacher ");
        res.redirect("/");
    }
});

// stdList Remaining : Teacher , TA
router.get("/stdList",middleware.isLoggedIn,function(req,res){
    if(req.user.role == "teacher"){
        var qstdList = "SELECT e.subjectSec,sc.subject,sj.subjectName,t.titlename,t.firstname,t.lastname,e.stdID,sd.firstnameTH,sd.lastnameTH FROM schedule sc,section s,subject sj,teacherteach tt,teacher t,enrollment e,student sd WHERE sd.stdID = e.stdID AND e.subjectID = s.subject AND e.subjectSec = s.section AND sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND e.subjectSec = sc.section AND tt.teacherID = ? ORDER BY sc.subject,e.stdID";
        db.query(qstdList,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {stdList: result};
            obj.stdList = result;
            res.render("stdList",obj);
        });
    }
    else if(req.user.role == "ta"){
        var qstdList = "SELECT e.subjectSec,sc.subject,sj.subjectName,t.titlename,t.firstname,t.lastname,e.stdID,sd.firstnameTH,sd.lastnameTH FROM schedule sc,section s,subject sj,tateach tt,teacherassistant t,enrollment e,student sd WHERE sd.stdID = e.stdID AND e.subjectID = s.subject AND e.subjectSec = s.section AND sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND s.subject = tt.subject AND tt.section = s.section AND tt.ID = t.ID AND e.subjectSec = sc.section AND tt.ID = ? ORDER BY sc.subject,e.stdID";
        db.query(qstdList,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {stdList: result};
            obj.stdList = result;
            res.render("stdList",obj);
        });
    }
    else{
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in stdList ");
        res.redirect("/");
    }
});

// stdRecord Remaing : Teacher 
router.get("/stdRecord",middleware.isLoggedIn,function(req,res){
    if(req.user.role != "teacher"){
        req.flash("error","You don't have permission to access");
        console.log("Error userrole in stdRecord ");
        res.redirect("/"); 
    }
    else{
        var qstdRecord = "SELECT e.point,e.grade,e.subjectSec,sc.subject,sj.subjectName,e.stdID,sd.firstnameTH,sd.lastnameTH FROM schedule sc,section s,subject sj,teacherteach tt,teacher t,enrollment e,student sd WHERE sd.stdID = e.stdID AND e.subjectID = s.subject AND e.subjectSec = s.section AND sc.section = s.section AND sc.subject = s.subject AND s.subject = sj.subjectCode AND sc.ID = tt.scheduleID AND tt.teacherID = t.teacherID AND e.grade IS NOT NULL AND e.point IS NOT NULL AND tt.teacherID = ? ORDER BY e.stdID";
        db.query(qstdRecord,[req.user.username],function(err,result){
            if(err) throw err;
            var obj = {};
            obj = {stdRecord: result};
            obj.stdRecord = result;
            res.render("stdRecord",obj);
        });
    }
});
    


//Login & Logout
router.get("/login",function(req,res){
    if(req.isAuthenticated())
        res.redirect('back');
    else
        res.render("login");
});
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/login' })
);
router.get('/logout',function(req,res){
    req.logout();
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;