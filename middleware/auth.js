const jwt = require("jsonwebtoken")
const user=require('../models/User');
const ErrorResponse = require('../utils/errorResponse')

exports.protect = async (req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token=req.headers.authorization.split(" ")[1]

  }
  if(!token){
    return next(new ErrorResponse("Not authorized to acess this route(no token)",401))
  }
  try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    console.log("i tried and reach hear and decoded id = ", decoded.id)
    const allusers= await User.getUsers()
    console.log("all users are ",allusers)
    const user =  await User.findById(decoded.id)

    if(!user){
      return next(new ErrorResponse("No user found with this id",404));
    }
    req.user =user
    next
  }catch(error){
    return next(new ErrorResponse("Not authorized to access this root(strang error)",401) )
  }
}
