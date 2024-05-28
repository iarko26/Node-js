const Post=require('../model/postBlog');
const like=require('../model/likeBlog');
exports.createLike=async(req,res)=>{
    try{
        const{post,user}=req.body;
        const Like=new like({post,user});   
        const saveLike=await Like.save();
        const findlike=await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id} },{new:true}).populate('likes').exec();
        res.json({
            post:findlike
        })

    }
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}
exports.deletelike=async(req,res)=>{
try{
    const{post,Like}=req.body;
    const unlike=await like.findOneAndDelete({post:post,_id:Like});
    const findlike=await Post.findByIdAndUpdate(post,{$pull:{likes:unlike._id}},{new:true});
    res.json({
        post:findlike
    
    })
}
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}
