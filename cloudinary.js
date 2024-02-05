import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (file) => {
  try {
    if(!file) return new Error('No file received');
    const result = await cloudinary.uploader.upload(file.path, { folder: 'folder_name' },{resouce_type: "auto"});
    console.log(result.url)
    return result;
  } catch (error) {
    fs.unlinkSync(file.path)
    console.log(error);
    return error;
  }
};

export default uploadOnCloudinary;


