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
    static async createNominationCategory(req, res, next) {
        try {
          const data = req.body;
          const post = await NominationCategoryData.storeNominationCategory(data);
          console.log("check federal", post);
          return res.status(200).json({ message: "successfully created", post});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingNominationCategory(req, res, next) {
        try {
          const postId = req.params.Id;
          const data = req.body;
          const post = await NominationCategoryData.getNomsById(postId);
          console.log("hellloooo", post);
    
          if (post.length === 0)
            return res.status(400).json({ error: "This  Nominationcategory can't be found!" });
          else await NominationCategoryData.updateNominationCategory(postId, data);
          return res.status(200).json({ message: "Update nominationcategory succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingNominationCategory(req, res, next) {
        try {
          const postId = req.query.Id;
          const post = await NominationCategoryData.getNomsById(postId);
          if (post.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await NominationCategoryData.deleteById(federalId);
    
          return res.status(200).json({ message: "federal deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }



}
export default NominationCategoryController