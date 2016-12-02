var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt-nodejs");

const data = require("../data");
const admins = data.admin;

module.exports = function(passport){
    passport.serializeUser(function(admin, done){
        done(null, admin);
    });

    passport.deserializeUser(function(admin, done){
        done(null, admin);
    });

    passport.use('local', new LocalStrategy({
        usernameField: 'adminname',
        passwordField: 'password',
        passReqToCallback: true
    },

        function (req, adminname, password, done){
            admins.getAdmin(adminname).then((admin) => {
                bcrypt.compare(password, admin.password, function(err, res){
                    if (err){
                        return Promise.reject("Error");
                    } else {
                        if (res === true){
                            return done(null, admin);
                        } else {
                            return done(null, false, req.flash('loginMessage', 'Password not match'));
                        }
                    }
                });
            }).catch((error) => {
                console.log(error);
                return done(null, false, req.flash('loginMessage', 'No admin found'));
            });
        }
    ));
}