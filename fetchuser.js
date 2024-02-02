var jwt=require('jsonwebtoken');
const JWT_SECRET='POORVAISGOOD$GIRL';
const fetchuser=(req,res,next)=>{
    //get user from the jwttoken and add id to req to object
const token=req.header('auth-token');

if(!token){
    res.status(401).send({error:"Please authenticate using valid token"})

}
try {
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
    
} catch (error) {
    res.status(401).send({error:"Invalid token"})

}
}
module.exports=fetchuser