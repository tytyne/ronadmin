import GatewayData from "../database/data/Gateway"
class GatewayController{
    static async allGateway(req,res,next){
        try{
            const data = await GatewayData.getGateWay()
            return res.status(200).json({message:"gateway",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }
    static async createGateway(req, res, next) {
        try {
          const data = req.body;
          const post = await  GatewayData.storeGateway(data);
          console.log("check federal", post);
          return res.status(200).json({ message: "successfully created", post});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingGateway(req, res, next) {
        try {
          const postId = req.params.Id;
          const data = req.body;
          const post = await  GatewayData.getById(postId);
          console.log("hellloooo", post);
    
          if (post.length === 0)
            return res.status(400).json({ error: "This  Nominationcategory can't be found!" });
          else await  GatewayData.updateGateway(postId, data);
          return res.status(200).json({ message: "Update nominationcategory succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingGateway(req, res, next) {
        try {
          const postId = req.query.Id;
          const post = await  GatewayData.getById(postId);
          if (post.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await  GatewayData.deleteById(postId);
    
          return res.status(200).json({ message: "federal deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }


}
export default GatewayController