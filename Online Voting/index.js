const express=require('express');
const userRoutes=require('./routes/userRoutes');
const candidateRoutes=require('./routes/Candidatesroutes');
const app=express();
const PORT=process.env.PORT || 400;
//middleware
app.use(express.json());
require('dotenv').config();
require('./config/database')();
app.use('/api/user',userRoutes);
app.use('/api/candidate',candidateRoutes);
app.listen(PORT,()=>{
    console.log(`Server Running On Port at ${PORT}`)
})