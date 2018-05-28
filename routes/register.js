var express = require("express");
var router  = express.Router();
var passport = require("passport");
var db = require("../db.js");
var bcrypt = require('bcrypt');
var saltRounds = 10;
var middleware = require("../middleware");
var crypto = require("crypto")

// name from register form is from database  except DOB is date
// address : add Regis and Current after name from database
// mom,dad and parent : add Dad , Mom  and Parent after name from database

//Upload picture and send back (AJAX)
router.post("/pictureUpload",function(req,res){
    console.log('file info: ',req.files);
    console.log("File has been uploaded");
    let sampleFile = req.files.stdPhoto;
    var name = crypto.randomBytes(20).toString('hex');
    var pathFile = './public/uploads/'+name+'.jpg';
    console.log(sampleFile);
    sampleFile.mv(pathFile, function(err) {
        if (err)
          return res.status(500).send(err);
        console.log("File Uploaded!!");
        res.send(pathFile);
        // res.render("register",{data:});
      });
});
router.post("/idCardUpload",function(req,res){
    console.log('file info: ',req.files);
    console.log("File has been uploaded");
    let sampleFile = req.files.idCardPhoto;
    var name = crypto.randomBytes(20).toString('hex');
    var pathFile = './public/uploads/'+name+'.jpg';
    console.log(sampleFile);
    sampleFile.mv(pathFile, function(err) {
        if (err)
          return res.status(500).send(err);
        console.log("File Uploaded!!");
        res.send(pathFile);
      });
});
router.post("/RegisUpload",function(req,res){
    console.log('file info: ',req.files);
    console.log("File has been uploaded");
    let sampleFile = req.files.RegisPhoto;
    var name = crypto.randomBytes(20).toString('hex');
    var pathFile = './public/uploads/'+name+'.jpg';
    console.log(sampleFile);
    sampleFile.mv(pathFile, function(err) {
        if (err)
          return res.status(500).send(err);
        console.log("File Uploaded!!");
        res.send(pathFile);
      });
});
router.post("/stdRecordUpload",function(req,res){
    console.log('file info: ',req.files);
    console.log("File has been uploaded");
    let sampleFile = req.files.stdRecordPhoto;
    var name = crypto.randomBytes(20).toString('hex');
    var pathFile = './public/uploads/'+name+'.jpg';
    console.log(sampleFile);
    sampleFile.mv(pathFile, function(err) {
        if (err)
          return res.status(500).send(err);
        console.log("File Uploaded!!");
        res.send(pathFile);
      });
});

//Temporary register Remaining : GET , POST
router.get("/register",function(req,res){
    res.render("register");
});
router.post("/register",function(req,res){
    console.log(req.body);
    var reqBody = req.body;
    var stdID = reqBody.stdID;

    db.query("SELECT stdID FROM student WHERE stdID = ? ",[stdID],function(err,results,fields){
        console.log(results);
        if(results[0] != undefined){
            req.flash("error","You don't have permission to access");
            console.log("already have this stdID");
            res.redirect('/register');
        }
        else{

    //Regis and Current address
    var addressRegis = "";
    var addressCurrent ="";
    var homeNORegis = reqBody.homeNORegis;
    var alleyRegis = reqBody.alleyRegis;
    var streetRegis = reqBody.streetRegis;
    var subdistrictRegis = reqBody.subdistrictRegis;
    var districtRegis = reqBody.districtRegis;
    var provienceRegis = reqBody.provienceRegis;
    var postcodeRegis = reqBody.postcodeRegis;
    var homeNOCurrent = reqBody.homeNOCurrent;
    var alleyCurrent = reqBody.alleyCurrent;
    var streetCurrent = reqBody.streetCurrent;
    var subdistrictCurrent = reqBody.subdistrictCurrent;
    var districtCurrent = reqBody.districtCurrent;
    var provienceCurrent = reqBody.provienceCurrent;
    var postcodeCurrent = reqBody.postcodeCurrent;
    // console.log(homeNORegis+" "+alleyRegis+" "+streetRegis+" "+subdistrictRegis+" "+districtRegis+" "+provienceRegis+" "+postcodeRegis);
    // console.log(homeNOCurrent+" "+alleyCurrent+" "+streetCurrent+" "+subdistrictCurrent+" "+districtCurrent+" "+provienceCurrent+" "+postcodeCurrent);

    //insert into address both Regis and Current
    //keep addressID in addressRegis,addressCurrent
    addressRegis =  crypto.randomBytes(20).toString('hex');
    console.log(addressRegis);
    db.query("INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[addressRegis,homeNORegis,"NULL","NULL","NULL","NULL",alleyRegis,streetRegis,subdistrictRegis,districtRegis,provienceRegis,"NULL",postcodeRegis]
    , function (err, results, fields) {
        if (err) throw err;
        else{
            console.log("Success into address Regis");
        }
    });
    addressCurrent = crypto.randomBytes(20).toString('hex');
    console.log(addressCurrent);
    db.query("INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[addressCurrent,homeNOCurrent,"NULL","NULL","NULL","NULL",alleyCurrent,streetCurrent,subdistrictCurrent,districtCurrent,provienceCurrent,"NULL",postcodeCurrent]
    , function (err, results, fields) {
        if (err) throw err;
        else{
            console.log("Success into address Current");
        }
    });

    //Dad and Mom and parent address
    var addressDad = "";
    var addressMom ="";
    var addressParent = "";
    var homeNODad = reqBody.homeNODad;
    var alleyDad = reqBody.alleyDad;
    var streetDad = reqBody.streetDad;
    var subdistrictDad = reqBody.subdistrictDad;
    var districtDad = reqBody.districtDad;
    var provienceDad = reqBody.provienceDad;
    var postcodeDad = reqBody.postcodeDad;
    var homeNOMom = reqBody.homeNOMom;
    var alleyMom = reqBody.alleyMom;
    var streetMom = reqBody.streetMom;
    var subdistrictMom = reqBody.subdistrictMom;
    var districtMom = reqBody.districtMom;
    var provienceMom = reqBody.provienceMom;
    var postcodeMom = reqBody.postcodeMom;
    var homeNOParent = reqBody.homeNOParent;
    var alleyParent = reqBody.alleyParent;
    var streetParent = reqBody.streetParent;
    var subdistrictParent = reqBody.subdistrictParent;
    var districtParent = reqBody.districtParent;
    var provienceParent = reqBody.provienceParent;
    var postcodeParent = reqBody.postcodeParent;
    //console.log(homeNODad+" "+alleyDad+" "+streetDad+" "+subdistrictDad+" "+districtDad+" "+provienceDad+" "+postcodeDad);
    //console.log(homeNOMom+" "+alleyMom+" "+streetMom+" "+subdistrictMom+" "+districtMom+" "+provienceMom+" "+postcodeMom);
    //console.log(homeNOParent+" "+alleyParent+" "+streetParent+" "+subdistrictParent+" "+districtParent+" "+provienceParent+" "+postcodeParent);

    //insert into address both Dad and Mom and parent
    //keep addressID in addressDad,addressMom , addressParent
    addressDad =  crypto.randomBytes(20).toString('hex');
    console.log(addressDad);
    db.query("INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[addressDad,homeNODad,"NULL","NULL","NULL","NULL",alleyDad,streetDad,subdistrictDad,districtDad,provienceDad,"NULL",postcodeDad]
    , function (err, results, fields) {
        if (err) throw err;
        else{
            console.log("Success into address Dad");
            //console.log(results);
        }
    });
    addressMom = crypto.randomBytes(20).toString('hex');
    console.log(addressMom);
    db.query("INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[addressMom,homeNOMom,"NULL","NULL","NULL","NULL",alleyMom,streetMom,subdistrictMom,districtMom,provienceMom,"NULL",postcodeMom]
    , function (err, results, fields) {
        if (err) throw err;
        else{
            console.log("Success into address Mom");
        }
    });
    addressParent = crypto.randomBytes(20).toString('hex');
    console.log(addressParent);
    db.query("INSERT INTO address VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[addressParent,homeNOParent,"NULL","NULL","NULL","NULL",alleyParent,streetParent,subdistrictParent,districtParent,provienceParent,"NULL",postcodeParent]
    , function (err, results, fields) {
        if (err) throw err;
        else{
            console.log("Success into address Parent");
        }
    });

    //Dad  , Parent add
    var titlenameDad = reqBody.titlenameDad;
    var firstnameDad = reqBody.firstnameDad;
    var lastnameDad = reqBody.lastnameDad;
    var citizenIDDad = reqBody.citizenIDDad;
    var emailDad = reqBody.emailDad;
    var telDad = reqBody.telDad;
    var dateDad = reqBody.dateDad;
    var statusDad = reqBody.statusDad;
    var careerDad = reqBody.careerDad;
    var careerPosDad = reqBody.careerPosDad;
    var salaryDad = reqBody.salaryDad;
    var workplaceNameDad = reqBody.workplaceNameDad;
    var workplaceTelDad = reqBody.workplaceTelDad;
    var nationalityDad = reqBody.nationalityDad;
    var raceDad = reqBody.raceDad;
    var religionDad = reqBody.religionDad;
    var titlenameMom = reqBody.titlenameMom;
    var firstnameMom = reqBody.firstnameMom;
    var lastnameMom = reqBody.lastnameMom;
    var citizenIDMom = reqBody.citizenIDMom;
    var emailMom = reqBody.emailMom;
    var telMom = reqBody.telMom;
    var dateMom = reqBody.dateMom;
    var statusMom = reqBody.statusMom;
    var careerMom = reqBody.careerMom;
    var careerPosMom = reqBody.careerPosMom;
    var salaryMom = reqBody.salaryMom;
    var workplaceNameMom = reqBody.workplaceNameMom;
    var workplaceTelMom = reqBody.workplaceTelMom;
    var nationalityMom = reqBody.nationalityMom;
    var raceMom = reqBody.raceMom;
    var religionMom = reqBody.religionMom;
    var titlenameParent = reqBody.titlenameParent;
    var firstnameParent = reqBody.firstnameParent;
    var lastnameParent = reqBody.lastnameParent;
    var citizenIDParent = reqBody.citizenIDParent;
    var emailParent = reqBody.emailParent;
    var telParent = reqBody.telParent;
    var dateParent = reqBody.dateParent;
    var statusParent = reqBody.statusParent;
    var careerParent = reqBody.careerParent;
    var careerPosParent = reqBody.careerPosParent;
    var salaryParent = reqBody.salaryParent;
    var workplaceNameParent = reqBody.workplaceNameParent;
    var workplaceTelParent = reqBody.workplaceTelParent;
    var nationalityParent = reqBody.nationalityParent;
    var raceParent = reqBody.raceParent;
    var religionParent = reqBody.religionParent;
    console.log("JingJung1");
    db.query("SELECT * FROM dad WHERE citizenID = ?",[citizenIDDad],function(err,results,fields){
        if(err) throw err;
        else{
            if(results[0] == undefined){
                db.query("INSERT INTO dad VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[citizenIDDad,titlenameDad,firstnameDad,lastnameDad,dateDad,religionDad,emailDad,telDad,salaryDad,nationalityDad,raceDad,statusDad,careerDad,careerPosDad,workplaceNameDad,workplaceTelDad,addressDad]
                , function (err, results, fields) {
                    if (err) throw err;
                    else{
                        console.log("Success into info Dad");
                    }
                });
            }
        }
    });
    console.log("JingJung2");
    db.query("SELECT * FROM mom WHERE citizenID = ?",[citizenIDMom],function(err,results,fields){
        if(err) throw err;
        else{
            if(results[0] == undefined){
                db.query("INSERT INTO mom VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[citizenIDMom,titlenameMom,firstnameMom,lastnameMom,dateMom,religionMom,emailMom,telMom,salaryMom,nationalityMom,raceMom,statusMom,careerMom,careerPosMom,workplaceNameMom,workplaceTelMom,addressMom]
                , function (err, results, fields) {
                    if (err) throw err;
                    else{
                        console.log("Success into info Mom");
                    }
                });
            }
        }
    });
    console.log("JingJung3");
    db.query("SELECT * FROM parent WHERE citizenID = ?",[citizenIDParent],function(err,results,fields){
        if(err) throw err;
        else{
            if(results[0] == undefined){
                db.query("INSERT INTO parent VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[citizenIDParent,titlenameParent,firstnameParent,lastnameParent,dateParent,religionParent,emailParent,telParent,"NULL",salaryParent,nationalityParent,raceParent,statusParent,careerParent,careerPosParent,workplaceNameParent,workplaceTelParent,addressParent]
                , function (err, results, fields) {
                    if (err) throw err;
                    else{
                        console.log("Success into info Parent");
                    }
                });
            }
        }
    });

    //username(stdID),password,role
    var password = reqBody.password;
    var role = "student";
    console.log("FUCKKK");
    //Student
    var parentRelation = "ญาติ";
    var titlenameTH = reqBody.titlenameTH;
    var titlenameEN = reqBody.titlenameEN;
    var firstnameTH = reqBody.firstnameTH;
    var lastnameTH = reqBody.lastnameTH;
    var firstnameEN = reqBody.firstnameEN;
    var lastnameEN = reqBody.lastnameEN;
    var date = reqBody.date;
    var bloodtype = reqBody.bloodtype;
    var marital = reqBody.marital;
    var religion = reqBody.religion;
    var nationality = reqBody.nationality;
    var race = reqBody.race;
    var NoSiblings = reqBody.NoSiblings;
    var sonNo = reqBody.sonNo;
    var citizenID = reqBody.citizenID;
    var email = reqBody.email;
    var tel = reqBody.tel;
    var gender = reqBody.gender;
    var dateFirstenroll = new Date();
    var habitat = reqBody.habitat;
    var maritalStatofMD = reqBody.maritalStatofMD;
    var soldier = reqBody.soldier;
    var stdStatus = "มีชีวิตอยู่";
    var recentAcademy = reqBody.recentAcademy;
    var recentGraduate = reqBody.recentGraduate;
    var recentGPAX = reqBody.recentGPAX;
    var program = reqBody.program;
    var curriculumSec = reqBody.curriculumSec;
    var department = reqBody.department;
    //path
    var picPhoto = reqBody.picPhoto;
    var picRegishome = reqBody.picRegishome;
    var picIDcard = reqBody.picIDcard;
    var picStdrecord = reqBody.picStdrecord

    console.log("FUCKKK");

    console.log("pic is : "+picPhoto+picRegishome+picIDcard+picStdrecord);

    db.query("SELECT * FROM curriculum WHERE section = ? AND department = ?",[curriculumSec,department],function(err,results,fields){
        if(err) throw err;
        else{
            var advisor1 = results[0].advisor1;
            var advisor2 = results[0].advisor2;
            console.log(advisor1+" "+advisor2);
        }

        db.query("INSERT INTO Student VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [stdID,citizenIDDad,citizenIDMom,addressCurrent,addressRegis,citizenIDParent,advisor1,advisor2,curriculumSec,department,parentRelation,titlenameTH,titlenameEN,
        firstnameTH,lastnameTH,firstnameEN,lastnameEN,date,bloodtype,marital,religion,nationality,race,NoSiblings,sonNo,citizenID,email,tel,gender,dateFirstenroll,habitat,
        maritalStatofMD,soldier,stdStatus,recentAcademy,recentGraduate,recentGPAX,picPhoto,picRegishome,picIDcard,picStdrecord,program],function(err,results,fields){
            if(err) throw err;
            else{
                console.log(results);
                console.log("Student is added");
                    //disablity,disease,allergy
                    var disability = reqBody.disability;
                    var disease = reqBody.disease;
                    var allergy = reqBody.allergy;

                    //disablity,disease,allergy must have data in student first
                    db.query("INSERT INTO disability VALUES(?,?)",[stdID,disability], function (err, results, fields) {
                        if (err) throw err;
                        else console.log("add "+disability+" to disability");
                    });
                    db.query("INSERT INTO congenitaldisease VALUES(?,?)",[stdID,disease], function (err, results, fields) {
                        if (err) throw err;
                        else console.log("add "+disease+" to disease");
                    });
                    db.query("INSERT INTO allergy VALUES(?,?)",[stdID,allergy], function (err, results, fields) {
                        if (err) throw err;
                        else console.log("add "+allergy+" to allergy");
                    });
            }
        });
    })

}
});

});

//Temporary register
router.get("/regis",function(req,res){
    if(req.isAuthenticated())
        res.redirect('/');
    else
        res.render("regis");
});
router.post("/regis",function(req,res){
    // with input username = kola , password = 1234 , role = ""
    //var reqBody = req.body ;
    // console.log("Index : " +jsonByIndex(reqBody,1)); //1234
    // console.log("isOwnProp : "+ reqBody.hasOwnProperty('username')); //true
    // console.log("isOwnProp : "+ reqBody.hasOwnProperty('apple')); //false
    // console.log("Value : " +jsonByKey(req.body,"apple")); //undefined
    // console.log("value : "+jsonByKey(req.body,"role").length); // 0 or "" if not have .length c
    // console.log("Length : " +jsonLength(req.body)); //3
    // console.log("apple : " + (req.body.apple == undefined) ); //true
    // console.log(req.body); // { username: 'kola', password: '1234', role: '' }
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query("INSERT INTO users VALUES(?,?,?)",[username,hash,role],function(err,results,fields){
            console.log(fields);
            if(err) res.redirect('back');
            req.login(username,function(err){
                if(err) throw err;
                res.redirect("/");
            });
        })
    })
});

function jsonByKey(obj,key){
    return obj[key];
}
function jsonLength(obj){
    return Object.keys(obj).length;
}
function jsonByIndex(obj, index) {
    return obj[Object.keys(obj)[index]];
}

module.exports = router;
