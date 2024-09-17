const express=require('express');
const candidateRoutes=require('./routes/candidateRoutes');
const adminRoutes=require('./routes/adminRoutes');
const voteRoutes=require('./routes/voteRoutes')
const app=express();
const PORT=process.env.PORT || 400;
//middleware
app.use(express.json());
require('dotenv').config();
require('./config/database')();
app.use('/api/admin',adminRoutes);
app.use('/api/candidate',candidateRoutes);\
app.use('/api/vote',voteRoutes);
app.listen(PORT,()=>{
    console.log(`Server Running On Port at ${PORT}`)
})