import FeedPostData from "../database/data/FeedPosts"
class FeedPostsController{
    static async getAllFeedPosts(req,res,next){
    try{
        const data= await FeedPostData.getFeedPosts()
        console.log("check data",data)
        return res.status(200).json({message:"feedposts",data})
    
    }
    catch(err){
        return next (new Error(err))
    }
}
  
}

export default FeedPostsController