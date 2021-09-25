import StateData from "../database/data/States"
class statesController{
    static async allStates(req,res,next){
        try{
            const data = await StateData.getStates()
            return res.status(200).json({message:"states",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default statesController