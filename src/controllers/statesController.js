import StateData from "../database/data/States"
class statesController{
    static async allStates(req,res,next){
        try{
            const data = await StateData.getStates()
            return res.status(200).json({message:"states",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }
    static async createState(req, res, next) {
        try {
          const data = req.body;
          const state = await StateData.storeState(data);
          console.log("check state", state);
          return res.status(200).json({ message: "successfully created", state });
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingState(req, res, next) {
        try {
          const stateId = req.params.Id;
          const data = req.body;
          const state = await StateData.getStateById(stateId);
          console.log("hellloooo", state);
    
          if (state.length === 0)
            return res.status(400).json({ error: "This  state can't be found!" });
          else await StateData.updateState(stateId, data);
          return res.status(200).json({ message: "Update state succesfully!" });
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingState(req, res, next) {
        try {
          const stateId = req.query.Id;
          const state = await StateData.getStateById(stateId);
          if (state.length === 0)
            return res.status(400).json({ error: "The Id doesn't exist!" });
          else await StateData.deleteById(stateId);
    
          return res.status(200).json({ message: "state deleted successfully" });
        } catch (err) {
          return next(new Error(err));
        }
      }

}

export default statesController