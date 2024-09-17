
const Candidate=require('../models/candidate');
exports.createCandidate=async(req,res)=>{

    try{
        const {name,party}=req.body;
        const exisiting_user=await Candidate.findOne({name:name,party:party});
        if(!exisiting_user){
            const new_candidate=await Candidate.create({
                name,party
            }

        )
        return res.status(200).json({
            success:true,
            message:"Candidate Created Successfully",
            candidate:new_candidate

           
        })

        }
        res.status(400).json({
            success:false,
            message:"Candidate already exists"
        })


    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Candidate creation failed"
        })
    }
}
exports.updateCandidate=async(req,res)=>{
    try{
        const{name,party}=req.body;
        const Updatecandidate=await Candidate.findByIdAndUpdate(req.params.id,{name,party},{new:true});
        if(!Updatecandidate){
            return res.status(400).json({
                success:false,
                message:"Candidate not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Candidate updated successfully",
            candidate:Updatecandidate

        })

        

    }catch(error){
        console.error(error);
        return res.status(500).json({

        })
    }
}
exports.deleteCandidate=async(req,res)=>{
    try{
        const Deletecandidate=await Candidate.findByIdAndDelete(req.params.id);
        if(!Deletecandidate){
            return res.status(400).json({
                success:false,
                message:"Candidate not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Candidate deleted successfully",
            candidate:Deletecandidate
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Candidate deletion failed"
        })
    }
}