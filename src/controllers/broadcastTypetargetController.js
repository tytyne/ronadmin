import BroadcastTypeData from "../database/data/BroadcastPostTargetType"
class BroadcastTypetargetController{
    static async allBroadcastType(req,res,next){
        try{
            const data = await BroadcastTypeData.getBroadcastPost()
            return res.status(200).json({message:"broadcast type target",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default  BroadcastTypetargetController