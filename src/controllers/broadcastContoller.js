import BroadcastData from "../database/data/BroadcastPost"

import { makeModerator} from "../utils/makeResponse"
import azureUpload from "../utils/azure"
const { uploadFileToBlob } = azureUpload
import axios from "axios"
import FormData from "form-data"

import dotenv from "dotenv"
dotenv.config()
const hostAPI = `${process.env.APP_URL_Media_Service}`

//get a broadcastpost

const getPost = async (req, res, next) => {

    try {

        const broadcastlist = await BroadcastData.getBroadcats();
        console.log(broadcastlist)
        if (broadcastlist.length === 0)

            return res.status(400).json({ error: "no post" })
        else

            return res.status(200).json(broadcastlist)


    }
    catch (err) {
        return next(new Error(err))
    }
}

//broadcat by Id
const getPostById = async (req, res, next) => {
    try {
        const broadcastId = req.params.id;
        const broadcast = await BroadcastData.getById(broadcastId);

        if (broadcast.length === 0)
            return res.status(400).json({ error: "no post" })
        else
            return res.status(200).json({ error: "posts", broadcast })
    }
    catch (err) {
        return next(new Error(err))
    }
}
//get broadcast by input

const getBroadcastPostByInput = async (req, res, next) => {
    try {
        const input = req.query.input;
        const broadcast = await BroadcastData.getByInput(input);
        console.log(broadcast)
            return res.status(200).json({ error: "posts", broadcast })
    }
    catch (err) {
        return next(new Error(err))
    }
}
// create a broadcast with media(photo)

const createPost = async (req, res, next) => {
    try {
        let { Comment, TargetType, TargetID, Status } = req.body

        const image = await uploadFileToBlob(req.file);
       
        if (TargetType === 1) {
            TargetID = 0
        }


        const post = await BroadcastData.createBroadcast({
            Comment,
            TargetType,
            TargetID,

            // CreatedBy: req.user.Id,
            CreatedBy:6,
            CreatedAt: new Date(),
            MediaType: image.mimetype,
            // UpdatedBy: req.user.Id,
            UpdatedBy:6,
            UpdatedAt: new Date(),
            MediaURL: image.url,
            Status

        })
        return res.status(200).json({ message: "the broadcastpost created succesfully!", post })
    } catch (error) {
        next(error);
    }

}
//create a broadcastpost with a video
const postVideo=async(req,res,next)=>{

    let MediaContent=req.files
    let{Comment, TargetType, TargetID, Status}=req.body
  
    const form_data = new FormData();
    form_data.append('MediaContent',MediaContent.MediaContent.data, MediaContent.MediaContent.name);
    const postResponse=await axios.post(`${hostAPI}/api/v1/MediaServices`,
        form_data, { headers: form_data.getHeaders() 
       
      }) .then(resp=>{
        console.log(resp);
        console.log("passed ....")
       
        console.log("check url",resp.data.data.contentUrl)
        

   if (TargetType === 1) {
        TargetID = 0
    }
  
    const post =  BroadcastData.createBroadcast({
        Comment,
        TargetType,
        TargetID,
        // CreatedBy: req.user.Id,
        CreatedBy:6,
        CreatedAt: new Date(),
        MediaType:resp.data.data.contentType,
        // UpdatedBy: req.user.Id,
        UpdatedBy:6,
        UpdatedAt: new Date(),
        MediaURL:resp.data.data.contentUrl,
        Status

    })
    return res.status(200).json({ message: "the broadcastpost created succesfully!", post })


      }) 

      .catch(error=>{
        console.log("check errorrr",error)
      });

  

}




const updateBroadcast = async (req, res, next) => {
    try {
        const broadcastId = req.params.id;
        const broadcast = await BroadcastData.getById(broadcastId);
        if (broadcast === 0)
            return res.status(400).json({ error: "This  broadcast can\'t be found!" })
        // const { Comment, TargetType, TargetID, Status } = req.body;

        let { Comment, TargetType, TargetID, Status } = req.body
        const statusRes = await makeModerator(Status)
        const image = await uploadFileToBlob(req.file);
        if (TargetType === 1) {
            TargetID = 0
        }

        const fileExtension = await getExtension(image.originalname)


        const updated = await EventData.updateEvent(broadcastId,
            {

                Comment,
                TargetType,
                TargetID,
                MediaType: fileExtension,
                UpdatedBy: req.user.Id,
                UpdatedAt: new Date(),
                MediaURL: image.url,
                Status: statusRes
            });
        res.send(updated);
    } catch (err) {
        return next(new Error(err))
    }

}



const deletePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const post = await BroadcastData.getById(postId)
        if (post.length === 0) return res.status(400).json({ error: "no post with that Id" })
        await BroadcastData.deleteById(postId);
        return res.status(200).json({ message: "the post deleted successfully!" });


    } catch (err) {
        return next(new Error(err))
    }
}


export default { createPost, getPost, getPostById, deletePost, updateBroadcast,getBroadcastPostByInput,postVideo }


