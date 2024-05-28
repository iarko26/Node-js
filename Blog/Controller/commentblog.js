const Comment=require('../model/commentBlog');
const Post=require('../model/postBlog');
exports.createComment=async(req,res)=>{
    try{
        const {post,user,body,date}=req.body;
        //new comment
        const comment=new Comment({post,user,body,date});
        const saveComment=await comment.save();
        //find the post by id and update the comment array
        const findpostupdate=await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id} },{new:true,}).populate('comments').exec();
        // res.status(200).json({success:true,data:findpostupdate,Message:'Comment Created Successfully'});
        res.json({
            post:findpostupdate
        })
        //if we dont want to show user body in comments array dont need to use populate and if we want to show user body post in comments array we have to use populate and execPopulate









        
        //alternative way
        // const comment=await Comment.create({post,user,body});





        
    }
    catch(err){
        console.error(err);

        console.log(err);
        res.status(500).json({success:false,data:'Server Error',Message:e.message});

    }

}
