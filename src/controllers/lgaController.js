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
    static async createLga(req, res, next) {
        try {
          const data = req.body;
          const post = await LgaData.storeLga(data);
          console.log("check federal", post);
          return res.status(200).json({ message: "successfully created", post});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingLga(req, res, next) {
        try {
          const postId = req.params.Id;
          const data = req.body;
          const post = await LgaData.getById(postId);
          console.log("hellloooo", post);
    
          if (post.length === 0)
            return res.status(400).json({ error: "This  Nominationcategory can't be found!" });
          else await LgaData.updateLga(postId, data);
          return res.status(200).json({ message: "Update nominationcategory succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingLga(req, res, next) {
        try {
          const postId = req.query.Id;
          const post = await LgaData.getById(postId);
          if (post.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await LgaData.deleteById(postId);
    
          return res.status(200).json({ message: "federal deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }


}
export default LgaController