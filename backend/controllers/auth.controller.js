import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import {genrateTokenAndSetCookie} from "../lib/utils/generateToken.js"

export const signup = async (req,res)=>{
  try {
    const {username,fullname,password,email} = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      return res.status(400).json({error: "Invalid email format"})
    }

    const existUser = await User.findOne({username})
    if(existUser){
      return res.status(400).json({error: "This user is already exists"})
    }
    const existEmail = await User.findOne({email})
    if(existEmail){
      return res.status(400).json({error: "This email is already exists"})
    }
    if(password.length < 6){
      return res.status(400).json({error: "Password must be more than or equle to 6 digits"})
    }

    // hash password
    const salt  = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      username,
      fullname,
      email,
      password: hashedPassword
    })

    // Simpan user terlebih dahulu
    await newUser.save();
    
    // Generate token setelah user tersimpan
    genrateTokenAndSetCookie(newUser._id, res);

    // Kirim response setelah semua proses selesai
    return res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      fullname: newUser.fullname,
      email: newUser.email,
      followers: newUser.followers,
      following: newUser.following,
      profileImg: newUser.profileImg,
      coverImg: newUser.coverImg 
    })

  } catch (error) {
    console.log("error in the signup func in auth controller", error.message)
    return res.status(500).json({error: "internal server error"})
  }
}
export const login = async (req,res)=>{
  try {
    const {username,password} = req.body
    const user = await User.findOne({username})
    if(!user){
      return res.status(400).json({error: "Invalid username or password"})
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
      return res.status(400).json({error: "Invalid username or password"})
    }

    genrateTokenAndSetCookie(user._id,res)

    res.status(200).json({
      _id: user._id,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      coverImg: user.coverImg 
    })
  

  } catch (error) {
    console.log("error in the login func in auth controller", error.message)
    return res.status(500).json({error: "internal server error"})
  }
}
export const logout = async (req,res)=>{
  try {
    res.cookie('jwt',"",{maxAge:0})
    res.status(200).json({message: "logged out successfully"})
  } catch (error) {
    console.log("error in the logout func in auth controller", error.message)
    return res.status(500).json({error: "internal server error"})
  }
}

export const getMe = async (req,res)=>{
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json({
      ...user.toObject(),
      watchlist: user.watchlist.map(id => id.toString())
    });
    
  } catch (error) {
    console.log("error in the getMe func in auth controller", error.message)
    return res.status(500).json({error: "internal server error"})
  }
}

