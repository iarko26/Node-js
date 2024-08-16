const bcrypt=require('bcrypt');
const User=require('../model/User');


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