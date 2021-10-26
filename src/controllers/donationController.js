import DonationData from "../database/data/Donations"
class DonationController{
    static async getAllDonations(req,res,next){
    try{
        const data= await DonationData.getDonations()
        console.log("check data",data)
        return res.status(200).json({message:"donations",data})
    
    }
    catch(err){
        return next (new Error(err))
    }
}
    static async donationTotal(req,res,next){
        try{
            const data=await DonationData.getTotal()
            console.log("total",data)
            return res.status(200).json({message:"total",data})

        }
        catch(err){
            return next(new Error(err))
        }
    }
    static async donationPending(req,res,next){
        try{
            const data=await DonationData.getPending()
          
            return res.status(200).json({message:"pending",data})

        }
        catch(err){
            return next(new Error(err))
        }
    }
}

export default DonationController