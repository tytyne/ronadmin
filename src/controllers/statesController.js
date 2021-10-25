import StateData from "../database/data/States"
import { v4 as uuidv4 } from 'uuid';

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
         
          let {Statename}  = req.body;
          console.log("check ststename",Statename)
          console.log(req.body.Statename)
          const data = await StateData.storeState({
            StateID:uuidv4(),
            Statename,
            Created:new Date()
          });
          console.log("check state", data);
          return res.status(200).json({ message: "successfully created", data });
        } catch (err) {
          return next(new Error(err));
        }
      }
    
      static async updatingState(req, res, next) {
        try {
          const stateId = req.params.id;
          console.log("check idddd",stateId)
          let {Statename}  = req.body;
          console.log("check data",Statename)
          const state = await StateData.getStateById(stateId);
          console.log("hellloooo", state);
    
          if (state.length === 0)
            return res.status(400).json({ error: "This  state can't be found!" });
          else 
          await StateData.updateState(stateId,{Statename});
          return res.status(200).json({ message: "Update state succesfully!" ,state});
        } catch (err) {
          return next(new Error(err));
        }
      }
      static async deletingState(req, res, next) {
        try {
          const stateId = req.params.id;
          console.log("get Id",stateId)
          console.log("get query",req.query)
          const state = await StateData.getStateById(stateId);
          console.log(state)
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