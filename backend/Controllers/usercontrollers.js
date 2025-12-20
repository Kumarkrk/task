import User from '../Structure/User.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
export const login=async(req,res)=>
{
const{email,password}=req.body;
const user=await User.findOne({email}).select("+password");
if(!user)
    {
        return res.status(400).json("user not existed");
    } 

const t=await bcrypt.compare(password,user.password);
if(!t)
{
    return res.status(400).json("password is incorrect");
}
const token= jwt.sign({
    id:user._id,
    email:user.email,
    role:user.role


},process.env.SECRET_KEY,  { expiresIn: "1d" });
if(!token)
{
    return res.status(400).json("error occured");
}
return res.status(200).json({mssg:"user logged sucessfully",token});
}
export const Signup=async( req,res)=>
{
const {email,password,role}=req.body;
const user=await User.findOne({email});
if(user)
{
    return res.status(400).json("user already existed");
    
}
const password1=await bcrypt.hash(password,10);
const data=await User.create({email,password:password1,role});
if(!data)
{
    return res.status(400).json("error occured");
}
const token=await jwt.sign({
    id:data._id,
    email:data.email,
    role:data.role
},process.env.SECRET_KEY,  { expiresIn: "1d" });
if(!token)
{
    return res.status(400).json("error occured");
}
return res.status(200).json({mssg:"user created sucessfully",token});
}
