

var middlewareObj = {};


middlewareObj.isLoggedIn = function(req,res,next){
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) return next();
    req.flash("error","Please Login First");
    res.redirect('/login')
}

middlewareObj.isLoggedInWelcome = function(req,res,next){
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
    if (req.isAuthenticated()) return next();
    res.redirect('/login')
}

middlewareObj.isLoggedInStudent = function(req,res,next){
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
	if (req.isAuthenticated()){
        if(req.user.role == "student") return next();
        else{
            console.log("Error userrole, try to request student path");
            req.flash("error","You don't have permission to access");
            res.redirect('back')
        }
    }
    else {
        console.log("Please Login");
        res.redirect('/login')
    }
}

middlewareObj.isLoggedInAdmin = function(req,res,next){
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
	if (req.isAuthenticated()){
        if(req.user.role == "admin") return next();
        else{
            console.log("Error userrole, try to request admin path");
            req.flash("error","You don't have permission to access");
            res.redirect('back')
        }
    }
    else {
        console.log("Please Login");
        res.redirect('/login')
    }
}

module.exports = middlewareObj;