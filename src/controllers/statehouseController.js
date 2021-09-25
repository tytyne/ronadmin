import StatehouseCategoryData from "../database/data/StatehouseConstituency"
class StatehouseController{
    static async allStatehouse(req,res,next){
        try{
            const data = await StatehouseCategoryData.getSTatehouse()
            return res.status(200).json({message:"Statehouse constituency",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default StatehouseController