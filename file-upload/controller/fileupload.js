const File=require('../models/File');
const localfile=async(req,res)=>{
    try{
        const file=req.files.file;
        console.log(file);
        let path=__dirname + '/files/' +Date.now() + `.${file.name.split('.')[1]}`;
        file.mv(path,(err)=>{
            if(err){
                console.log(err);

            }
            res.status(200).json({
                success:true,
                message:'File uploaded successfully'
            })
        })

    }catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'File upload failed'
        })
      
    }
}

module.exports={localfile};