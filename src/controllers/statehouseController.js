import StateHouseData from "../database/data/StatehouseConstituency"
class StatehouseController{
    static async allStatehouse(req,res,next){
        try{
            const data = await StateHouseData.getSTatehouse()
            return res.status(200).json({message:"Statehouse constituency",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }
    static async createStatehouse(req, res, next) {
        try {
          let{ShcName} = req.body;
          const post = await StateHouseData.storeStatehouse({
            ShcName,
            Created:new Date()
          });
          console.log("check federal", post);
          return res.status(200).json({ message: "successfully created", post});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingStatehouse(req, res, next) {
        try {
          const postId = req.params.id;
          const data = req.body;
          const post = await StateHouseData.getById(postId);
          console.log("hellloooo", post);
    
          if (post.length === 0)
            return res.status(400).json({ error: "This  Nominationcategory can't be found!" });
          else await StateHouseData. updateStatehouse(postId, data);
          return res.status(200).json({ message: "Update nominationcategory succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingStatehouse(req, res, next) {
        try {
          const postId =  req.params.id;
          const post = await StateHouseData.getById(postId);
          if (post.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await StateHouseData.deleteById(postId);
    
          return res.status(200).json({ message: "federal deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }


}
export default StatehouseController