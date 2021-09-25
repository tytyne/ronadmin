import TargetGroupData from "../database/data/BroadcastPostTargetType"

class TargetgroupController{

static async getAll(req,res,next){
        try {
    
            const resultData = await TargetGroupData.getBroadcastPost();
            
                return   res.status(200).json({resultData})
    
        } catch (err) {
            return next(new Error(err))
        }
}

}

export default TargetgroupController