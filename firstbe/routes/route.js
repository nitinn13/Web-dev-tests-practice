const express = require('express');
const router = express.Router();

const auth = (req, res, next) => {
    console.log('auth started');
    req.user={id:1, role:"admin"}

    if(req.user){
        next();
    }
    else{
        res.json({
            success: false,
            message: 'Unauthorized'
        })
    }
}

const isStudent = (req, res, next) => {
    console.log('isStudent started');

    if(req.user.role==="Student"){
        next();
    }
    else{
        res.json({
            success: false,
            message: 'Access Denied, not a student'
        })
    }
}


const isAdmin = (req,res,next)=>{
    if(req.user.role === "admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message : "Access Denied, not an admin"
        })
    }

}


router.get("/student",auth,isStudent,(req, res)=>{
    console.log("Student route");
    res.send("Hello Student");
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    console.log("Admin route");
    res.send("Hello admin");
})
module.exports = router;