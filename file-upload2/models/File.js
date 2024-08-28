const mongoose=require('mongoose');
const nodeMailer=require('nodemailer');
const FileSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageurl:{
        type:String,
        required:true,

    },
    tags:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    }
    

)

//post model
FileSchema.post("save",async function(doc){
    try{
        console.log("Doc", doc);
        //transporter
        let transporter=nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        //send mail
        let info=await transporter.sendMail({
            from:"arnobweb",
            to:doc.email,
            subject:"new file uploaded",
            html:`<h1>File uploaded successfully</h1> <p>
            Name:${doc.name}<br>
            Tags:${doc.tags}<br>
            <a href="${doc.imageurl}">View Image</a>
            </p>`


        })
        console.log("Message sent:",info)

    }catch(err){
        console.log(err);
        

    }
})
module.exports=mongoose.model("File",FileSchema);