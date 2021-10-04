import broadcastTypeData from "../database/data/BroadcastPostTargetType"
class BroadcastTypeController{
    static async allBroadcastType(req,res,next){
        try{
            const data = await broadcastTypeData.getPostTargetTypes()
            return res.status(200).json({message:"broadcast posts",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default BroadcastTypeController