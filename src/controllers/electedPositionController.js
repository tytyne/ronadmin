import ElectedPositionData from "../database/data/ElectedPosition"
class ElectedPositionController{
    static async allElectedPosition(req,res,next){
        try{
            const data = await ElectedPositionData.getElectedPositions()
            return res.status(200).json({message:"Elected Positions",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default ElectedPositionController