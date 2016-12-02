const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;


router.get("/", (req, res) => {   
    //test mongodb
    return user.getAllUsers().then((users)=>{     
        res.render('misc/debug',{ debug: true, modelData: { user: users },"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/home.css"    });
    });
});



module.exports = router;