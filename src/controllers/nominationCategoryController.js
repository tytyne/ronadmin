import NominationCategoryData from "../database/data/NominationCategory"
class NominationCategoryController{
    static async allNominationCategories(req,res,next){
        try{
            const data = await NominationCategoryData.getNominationCategory()
            return res.status(200).json({message:"nomination categories",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default NominationCategoryController