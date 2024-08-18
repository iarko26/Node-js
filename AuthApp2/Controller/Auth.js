const bcrypt=require('bcrypt');
const User=require('../model/User');
const jwt=require('jsonwebtoken');

require('dotenv').config();


//signup router handler
exports.signup=async(req,res)=>{
    try{
        //get data
const{name,email,password,role}=req.body;
//check if user already exists
const existing_user=await User.findOne({email:email});
if(existing_user){
    return res.status(400).json({
        success:false,
        message:'User already exists'


    })
}

//secure password

let hashpass;
try{
    hashpass=await bcrypt.hash(password,10);

}
catch(error){
    return res.status(500).json({
        success:false,
        message:"Password Hash Failed!!!"
    })
}
//create new user
const new_user=await User.create({
    name,email,password:hashpass,role
})
return res.status(200).json({
    success:true,
    message:'User created successfully',

})


    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"User creation failed!!!"
        })

    }
}

//login handler
exports.login=async(req,res)=>{
    try{
        //data fetch
        const{email,password}=req.body;
        //validate user
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'Please enter email and password'
            })
        }
        //check for registered user
        const existing_user=await User.findOne({email});
        if(!existing_user){
            return res.status(401).json({
                success:false,
                message:'User not found'
            })
        }
        const payload={
            email:existing_user.email,
            id:existing_user._id,
            role:existing_user.role
        }

        //verify password and generate jwt token
        const ispassword=await bcrypt.compare(password,existing_user.password);
        if(ispassword){
            //password is correct generate token
            const token=  jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'2h'});
            const user=existing_user.toObject();
            user.token=token;
            user.password=undefined;
            
            //  cookie(cookie name,cookie value,cookie options)
            const options={
                expires:new Date(Date.now()+ 2*24*60*60*1000),
                httpOnly:true
            }
            res.cookie('token',token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User logged in successfully"
            })
            // res.status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:"User logged in successfully"
            // })






        }
        else{
            return res.status(403).json({
                success:false,
                message:"Password is incorrect"
            })

        }

    }
    catch(error){
        console.error(error);
        
            return res.status(500).json({
                success:false,
                message:"Login failed"
            })
        

    }
}