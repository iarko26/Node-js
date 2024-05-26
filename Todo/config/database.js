const mongoose=require('mongoose');
require('dotenv').config(); //to load the env file
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        //this return a promise
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('Database connected');
    })
.catch((error)=>{
    console.log('Error connecting to database');
    console.log(error.message);
    //exit with failure
    process.exit(1);
})
}
//export the function
module.exports=dbconnect;













//to feed process we need to install dotenv library
//npm install dotenv
//create a .env file in the root directory and add the following
//DATABASE_URL=mongodb://localhost:27017/yourdatabase
//add the following code in the server.js file
//require('dotenv').config();
//everything will be load in the process.env object
