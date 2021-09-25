import notificationData from "../database/data/NotificationType"
class notificationController{
    static async allNotifications(req,res,next){
        try{
            const data = await notificationData.getNotification()
            return res.status(200).json({message:"notifications",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default notificationController