import LgaData from "../database/data/LGA"
class LgaController{
    static async allLga(req,res,next){
        try{
            const data = await LgaData.getLga()
            return res.status(200).json({message:"lga",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default LgaController