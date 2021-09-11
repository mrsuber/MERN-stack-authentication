const jwt = require("jwt")
const user=require('../models/User');

exports.protect = async (req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    token=req.headers.authorization.split()
  }
}
