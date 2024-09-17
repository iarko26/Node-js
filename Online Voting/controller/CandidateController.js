const Candidate=require('../models/candidate');
//list of all candidates
exports.getCandidates=async(req,res)=>{
    try{
        const candidates=await Candidate.find();
        return res.status(200).json({
            success:true,
            message:"Candidates retrieved successfully",
            candidates
            
        })


    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Failed to get candidates"
        })
    }
}
//get candidates by vote count
exports.getSortedCandidates=async(req,res)=>{
    try{
        const candidates=await Candidate.find().sort({
            voteCount:-1
        });
        return res.status(200).json({
            success:true,
            message:"Candidates sorted by vote count",
            candidates 
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Failed to get candidates"
        })
    }

}
