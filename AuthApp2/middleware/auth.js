const jwt=require('jsonwebtoken');

require('dotenv').config();
 exports.auth=async(req,res,next)=>{
    try{
        console.log("Cookies: ",req.cookies);
        console.log("Body: ",req.body);
        console.log("Headers: ",req.header("Authorization"));
    
        const token=req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "") ;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"No Token Provided",


            })
        }
        //verify token
        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);
            req.existing_user=payload;
        }catch(error){
            console.error(error);
            return res.status(401).json({
                success:false,
                message:"Invalid Token Provided"
            })
        }
        next();


    } catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"Token Verification Failed"
        })
        

    }
 }

 exports.isStudent=(req,res,next)=>{
    try{
        if(req.existing_user.role!=='Student'){
            return res.status(401).json({
                success:false,
                message:"Access Denied for Student"
            })


        }
        next();

    }catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"user role does not match"
        })
    }
 }

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.existing_user.role!=='Admin'){
            return res.status(401).json({
                success:false,
                message:"Access Denied for Admin"
            })
        }
        next();

    }catch(error){
        console.error(error);
        return res.status(401).json({
            success:false,
            message:"user role does not match"
        })
    }
}