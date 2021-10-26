import UserActivityData from "../database/data/UserActivity"
import {
    makeUseIP
    
  } from "../utils/makeResponse";
import axios from  "axios"
class UserActivityController{
    static async allActivity(req,res,next){
        try{
            const data = await UserActivityData.getActivity()
            return res.status(200).json({message:"activities",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default UserActivityController