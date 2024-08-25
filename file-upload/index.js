const express=require('express');
const app=express();
const fileUpload=require('express-fileupload');
require('dotenv').config();
const PORT=process.env.PORT || 4000;
app.use(express.json());

app.use(fileUpload());
require('./config/database')();
require('./config/cloudinary')();

const Upload=require('./routes/FileUpload');
app.use('/api/v1',Upload);
app.listen(PORT,()=>{
    console.log(`Server Running On Port at ${PORT}`)
})



