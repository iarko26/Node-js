const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

const localfile = async (req, res) => {
    try {
        const file = req.files.file;
        console.log(file);
        let path = __dirname + '/files/' + Date.now() + `.${file.name.split('.')[1]}`;
        file.mv(path, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: 'File upload failed'
                });
            }
            res.status(200).json({
                success: true,
                message: 'File uploaded successfully'
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'File upload failed'
        });
    }
};

function isSupported(type, supportedFormats) {
    return supportedFormats.includes(type);
}

async function uploadCloudinary(file, folder,quality) {
    
    const options = { folder: folder };
    if(quality){
        options.quality=quality;
    }
    options.resource_type = 'auto';

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

const imageuploader = async (req, res) => {
    try {
        // Data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);
        const file = req.files.imagefile;
        console.log(file);

        // Validation
        const supportedFormats = ["jpg", "jpeg", "png"];
        const filetype = file.name.split('.')[1].toLowerCase();
        console.log(filetype);

        if (!isSupported(filetype, supportedFormats)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported'
            });
        }

        // Upload image to Cloudinary
        const response = await uploadCloudinary(file, 'Nodejs');
        console.log(response);

        // Save data to database
        const newfile = await File.create({
            name,
            imageurl: response.secure_url,
            tags,
            email,
        });

        // Send final response
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            imageurl: response.secure_url,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Image upload failed'
        });
    }
};

const vidoeuploader=async(req,res)=>{
    try{
        const {name,email,tags}=req.body;
        console.log(name,email,tags);
        const file=req.files.videofile;
        console.log(file);
        const supportedFormats=["mp4","mkv","mov"];
        const filetype=file.name.split('.')[1].toLowerCase();
        console.log(filetype);
        
        if (!isSupported(filetype, supportedFormats)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported'
            });
        }
        const response = await uploadCloudinary(file, 'Nodejs');
        console.log(response);
                // Save data to database
                const newfile = await File.create({
                    name,
                    imageurl: response.secure_url,
                    tags,
                    email,
                });
        
                // Send final response
                res.status(200).json({
                    success: true,
                    message: "Vidoe  uploaded successfully",
                    imageurl: response.secure_url,
                });
        






    }catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Vidoe  upload failed'
        });
    }

}
const imageSizer=async(req,res)=>{
    try {
        // Data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);
        const file = req.files.imagefile;
        console.log(file);

        // Validation
        const supportedFormats = ["jpg", "jpeg", "png"];
        const filetype = file.name.split('.')[1].toLowerCase();
        console.log(filetype);

        if (!isSupported(filetype, supportedFormats)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported'
            });
        }

        // Upload image to Cloudinary
        const response = await uploadCloudinary(file, 'Nodejs',20);
        console.log(response);

        // Save data to database
        const newfile = await File.create({
            name,
            imageurl: response.secure_url,
            tags,
            email,
        });

        // Send final response
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            imageurl: response.secure_url,
        });

    }catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Image resize failed'
        });
    }
}

module.exports = { localfile, imageuploader,vidoeuploader,imageSizer };
