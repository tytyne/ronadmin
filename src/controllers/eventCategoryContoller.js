import EventCategoryData from "../database/data/EventCategory"
class EventCategoryController{
    static async allEventCategory(req,res,next){
        try{
            const data = await EventCategoryData.getEventCategory()
            return res.status(200).json({message:"event categories",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default EventCategoryController