import HostTypeData from "../database/data/LiveStreamEventHostType"

class HostTypeController{

static async getAll(req,res,next){
        try {
    
            const resultData = await HostTypeData. allHostTypes();
            console.log(resultData)
            if (resultData.length === 0)
                return res.status(400).json({error:"no hostype"})
            else
                return   res.status(200).json({resultData})
    
        } catch (err) {
            return next(new Error(err))
        }
}


static async getHostByName(req, res, next){
    try {
        const input = req.query.type;
        const host = await HostTypeData.getEventHostType(input);
        if (host.length === 0)
            return res.status(400).json({error:"no host type"})
        else
            return res.status(200).json({host})
    } catch (err) {
        return next(new Error(err))
    }
}
}

export default HostTypeController