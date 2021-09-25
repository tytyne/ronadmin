import BroadcastData from "../database/data/BroadcastPost"
import EventData from "../database/data/Events"
import UserData from "../database/data/User"
import LGAData from "../database/data/LGA"
import DiscussionData from "../database/data/DiscussionSpaces"
class statsController{
    static async numbers(req,res,next){
        try{
            const broadcasts = await BroadcastData.countingBroadcasts()
            console.log("broadcasts",broadcasts)
            const events = await EventData.countingEvents()
            console.log("events",events)
            const users = await UserData.countingUsers()
            console.log("users",users)
            const lga = await LGAData.countingLga()
            console.log("lga",lga)
            const discussions = await DiscussionData.countingDiscussions()
            console.log("discussions",discussions)
          return res.status(200).send({message:"the stats",broadcasts,events,users,lga,discussions})
          
        }
        catch(err){
            return next(new Error(err)) 
        }
    }
    
  

}
export default statsController