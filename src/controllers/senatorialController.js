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
    static async createSenatorial(req, res, next) {
        try {
          let{SDName} = req.body;
          const post = await SenatorialDistrictData.storeSenatorial(
           {
            SDName,
            Created:new Date()
           });
          console.log("check senatorial", post);
          return res.status(200).json({ message: "successfully created", post});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingSenatorial(req, res, next) {
        try {
          const postId = req.params.id;
          const data = req.body;
          const post = await SenatorialDistrictData.getSenatorialById(postId);
          console.log("hellloooo", post);
    
          if (post.length === 0)
            return res.status(400).json({ error: "This  senatorial discrict can't be found!" });
          else await SenatorialDistrictData.updateSenatorial(postId, data);
          return res.status(200).json({ message: "Update senatorial discrict succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingSenatorial(req, res, next) {
        try {
          const postId = req.params.id;
          const post = await SenatorialDistrictData.getSenatorialById(postId);
          console.log("get senatorial",post)
          if (post.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await SenatorialDistrictData.deleteById(postId);
    
          return res.status(200).json({ message: "senatorial Discrict deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }



}
export default SenatorialDistrictController