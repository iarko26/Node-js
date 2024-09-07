const mongoose=require('mongoose');
require('dotenv').config();
const dbconnect=()=>{
    mongoose.connect(process.env.Mongodb_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Database connected successfully');
    })
    .catch((error)=>{
        console.log('Error connecting to database');
        console.log(error.message);
        process.exit(1);
    })
}
module.exports=dbconnect;
