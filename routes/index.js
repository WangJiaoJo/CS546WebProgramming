const debugRoutes = require("./debug"); 
const homeRoutes = require("./home");


const constructorMethod = (app, passport) => {
    app.use("/debug", debugRoutes);
    app.use("/home", homeRoutes);

    app.get("/adminlogin", (req, res) => {
        res.render('admin/adminLogin1', {message: req.flash('loginMessage')});
    });

    app.get("/adminuser", isLoggedIn, (req, res) => {
        res.render('admin/adminUser1', {admin: req.admin});
    });

    app.post("/login", passport.authenticate('local', {
        successRediredct: '/adminuser',
        failureRedirect: '/adminlogin',
        failureFlash: true
    }));

    app.use("*", (req, res) => {
        res.sendStatus(400);
    });
};

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/adminlogin');
}

module.exports = constructorMethod;