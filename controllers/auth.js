const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

//register user
exports.register= async (req,res,next)=>{
  const {username,email,password} = req.body;

  //now we are working with database
  try{
    const user= await User.create({
      username,email,password
    })

    sendToken(user, 201,res)
  }catch(error){
    next(error)

  }
}


//login user
exports.login= async (req,res,next)=>{
  const {email,password} = req.body;
  if(!email || !password){
    return next(new ErrorResponse("please provide an email and password", 400))
  }

  try{
    const user = await User.findOne({email}).select("+password")
    if(!user){
      return next(new ErrorResponse("Invalid credentials",401))

    }

    const isMatch = await user.matchPasswords(password)

    if(!isMatch){
      return next(new ErrorResponse("Invalid Login credentials",401))

    }


    sendToken(user, 200,res)
  }catch(error){

  }
}

//reset user password
exports.forgotpassword=(req,res,next)=>{
  res.send("Forgot Password Route")
}

//password reset done
exports.resetpassword=(req,res,next)=>{
  res.send("Reset Password Route")
}

const sendToken = (user,statusCode,res) =>{
  const token = user.getSignedToken()
  res.status(statusCode).json({success:true,token})
}
