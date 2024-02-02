const express=require('express');
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser')
const JWT_SECRET='POORVAISGOOD$GIRL';
//route 1-to create user
router.post('/createuser' ,[
    body('name','enter a valid name').isLength({min:5}),
    body('email','enter a valid email').isEmail(),
    body('password','password must be 5 letters').isLength({min:5}),
],async(req,res)=>{
  let success=false
  const errors=validationResult(req);
  if(!errors.isEmpty()){
return res.status(400).json({success,errors:errors.array()})
  }
  try{
  //to check that the user with email exists
 let user=await User.findOne({email:req.body.email});
 if(user){
    return res.status(400).json({success,error:"sorry a user with the same email already exists"})
 }
 const salt=await bcrypt.genSalt(10);
 const secPass=await bcrypt.hash(req.body.password,salt);
 user=await User.create({
    name:req.body.name,
    password: secPass,
email:req.body.email
  })
//   .then(user=>res.json(user))
//   .catch(err=>console.log(err))
//   res.json({error:'please enter a unique value for email ',message:err.message})
   const data={
    user:{
      id:user.id
    }
   }
const token =jwt.sign(data,JWT_SECRET);
// console.log(jwtData);
success=true;
  res.json({success,token})
  console.log('token')
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal server error occured")
}
    });
//authenticate the user .no login required route 2-to login the user
router.post('/login' ,[
  body('email','enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists(),
 
],async(req,res)=>{
  let success=false
  const errors=validationResult(req);
  if(!errors.isEmpty()){
return res.status(400).json({errors:errors.array()})
  }
  const{email,password}=req.body;
  try {
    let user= await User.findOne({email});
    if(!user){
      return res.status(400).json({errors:"please try to login with the correct credentials"});
    }
    const passwordcompare=await bcrypt.compare(password,user.password);
    if(!passwordcompare){
      success=false
      return res.status(400).json({success,errors:"please try to login with the correct credentials"});
    }
    const data={
      user:{
        id:user.id
      }
     }
  const token =jwt.sign(data,JWT_SECRET);
  success=true;
  res.json({success,token});
 
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error occured")
  }
})
//route 3-get logged user details using /getuser (login required)
router.post('/getuser',fetchuser,async(req,res)=>{
try {
  userId=req.user.id;
  const user=await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server error occured");
}
})
module.exports=router;

