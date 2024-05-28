const moongoose=require('mongoose');
require('dotenv').config();
const dbconnect=()=>{
moongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Database connected successfully');
})
.catch((error)=>{
    console.log('Error connecting to database');
    console.log(error.message);
    //exit with failure
    process.exit(1);
})
}
module.exports=dbconnect;