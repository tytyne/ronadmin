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
    static async createFederal(req, res, next) {
        try {
          const data = req.body;
          const federal = await FederalData.storeFederal(data);
          console.log("check federal", federal);
          return res.status(200).json({ message: "successfully created", federal});
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingFederal(req, res, next) {
        try {
          const federalId = req.params.Id;
          const data = req.body;
          const federal = await FederalData.getFederalById(federalId);
          console.log("hellloooo", federal);
    
          if (federal.length === 0)
            return res.status(400).json({ error: "This  federal can't be found!" });
          else await FederalData.updateFederal(federalId, data);
          return res.status(200).json({ message: "Update federal succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingFederal(req, res, next) {
        try {
          const federalId = req.query.Id;
          const federal = await FederalData.getFederalById(federalId);
          if (federal.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await FederalData.deletefederalById(federalId);
    
          return res.status(200).json({ message: "federal deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }




}
export default FederalConstituency