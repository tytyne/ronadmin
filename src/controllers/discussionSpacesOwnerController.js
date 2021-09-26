import DiscussionSpaceDataOwner from "../database/data/DiscussionSpaceOwner"
class DiscussionSpaceOwnerController{
    static async allDiscussionSpaceOwner(req,res,next){
        try{
            const data = await DiscussionSpaceDataOwner.getDiscussionSpaceOwner()
            return res.status(200).json({message:"DiscussionSpace owner type",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default DiscussionSpaceOwnerController