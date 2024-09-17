const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../models/user');
require('dotenv').config();
exports.signup=async(req,res)=>{
    try{
        const {name,voterCard,password,role}=req.body;
        const exisiting_user=await User.findOne({voterCard:voterCard});
        if(exisiting_user){
            return res.status(400).json({
                success:false,
                message:"You have already registered"
            })
        }
        let hasspass;
        try{
            hasspass=await bcrypt.hash(password,12);
        }catch(err){
            return res.status(400).json({
                success:false,
                message:"Password hashing failed"
            })
        }
        const new_user=await User.create({
            name,
            voterCard,
            password:hasspass,
            role
        })
        return res.status(200).json({
            success:true,
            message:'User created successfully',
        
        })

    }   catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Your account creation falied!!!"
        })

    }
}
exports.login=async(req,res)=>{
    try{
        const {voterCard,password}=req.body;
        //validate user
        if(!voterCard || !password){
            return res.status(400).json({
                success:false,
                message:"Please provide voterCard and password"
            })
        }
        const payload={
            voterCard:exisiting_user.voterCard,
            id:exisiting_user._id,
            role:exisiting_user.role


        }
        const ispassword=await bcrypt.compare(password,exisiting_user.password);
        if(ispassword){
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:'2h'
            })
            const user=exisiting_user.toObject();
            user.token=token;
            user.password=undefined;
            return res.status(200).json({
                success:true,
                message:"Login successful",
                user
            })

        }
       
         else{
                return res.status(400).json({
                    success:false,
                    message:"Invalid credentials"
                })
         }


    }catch(error){
           console.error(error);
              return res.status(500).json({
                success:false,
                message:"Login failed"
              })
    }

    

}