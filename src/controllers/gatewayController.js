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

}
export default GatewayController