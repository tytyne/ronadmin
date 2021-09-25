import FederalData from "../database/data/FederalConstituency"

class FederalConstituency{
    static async allFederals(req,res,next){
        try{
            const data = await  FederalData.getFederal()
            return res.status(200).json({message:"Federal constituency",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default FederalConstituency