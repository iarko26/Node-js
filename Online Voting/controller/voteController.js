const Candidate=require('../models/candidate');
const Vote=require('../models/vote');
const User=require('../models/user');

exports.VoteforCandidates=async(req,res)=>{
    try{
        const userId=req.user.id;
        const candidateId=req.params.id;
        const existing_vote=await Vote.findOne()
       


    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Failed to vote"
        })
    }
}