const Post=require('../model/postBlog');
exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({title,body});
        const savePOst=await post.save();
        res.json({
            post:savePOst
        })


    }
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
}
exports.getAllpost=async(req,res)=>{
    try{
        const posts=await Post.find().populate('comments').populate('likes').exec();
        res.json({
            posts:posts
        })

    }
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }
    
}