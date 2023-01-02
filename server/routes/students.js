const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController")


router.get('/',studentController.view);

/*
//router
router.get('',(req,res)=>{
    res.render("home");
});

*/

module.exports = router;