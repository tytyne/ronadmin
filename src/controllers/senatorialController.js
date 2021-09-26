import SenatorialDistrictData from "../database/data/SenatorialDis"
class SenatorialDistrictController{
    static async allSenatorialDistrict(req,res,next){
        try{
            const data = await SenatorialDistrictData.getSenatorial()
            return res.status(200).json({message:"senatorial districts",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default SenatorialDistrictController