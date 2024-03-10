import { User } from "../Models/User.js";
import  Jwt  from "jsonwebtoken";

export const Authenticate =async (req,res,next)=>{

    const token = req.header('Auth'); 
    try{
    if(!token) return res.json({message:"Login First....!"});
    
    // res.json({message:"Superman is belong from DC....!"});
    
    const decoded = Jwt.verify(token, process.env.Jwt);
    
    const id = decoded.userId
    
    // console.log(decoded.userId);
    
    let user = await User.findById(id);
    
    if(!user) return res.json({message:"USer Not Exit...!"});
    
    req.user = user;
    
    // req.data = "Superman is belong from DC....!"
    
    next();
} catch (err){

    if (err.name == "TokenExpiredError") return res.json ({message:"Token Expire Please Login First...!"})

    res.json({message:"Internal Server Error...!"});
}
    
    };
    