const User = require('../models/User')

//register user
exports.register= async (req,res,next)=>{
  const {username,email,password} = req.body;

  //now we are working with database
  try{
    const user= await User.create({
      username,email,password
    })

    res.status(201).json({
      success:true,
      user
    })
  }catch(error){
    res.status(500).json({
      success:false,
      error:error.message,
    })
  }
}

//login user
exports.login= async (req,res,next)=>{
  const {email,password} = req.body;
  if(!email || !password){
    res.status(400).json({success:false,error:"Please provide email and password"})
  }

  try{
    const user = await User.findOne({email}).select("+password")
    if(!user){
      res.status(404).json({success:false,error:"Invalid credentials"})
    }

    const isMatch = await user.matchPasswords(password)
    if(!isMatch){res.status(404).json({success:false,error:"Invalid Login credentials"})}


    res.status(201).json({ success:true, token:"lkjdlkfsdjfo"  })
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
