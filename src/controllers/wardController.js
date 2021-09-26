
import WardData from "../database/data/Ward"
class wardController{
    static async allWards(req,res,next){
        try{
            const data = await WardData.getWards()
            return res.status(200).json({message:"wards",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default wardController