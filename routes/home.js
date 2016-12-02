const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {   
        res.render('home',{"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/home.css"});
});



module.exports = router;