import CountryData from "../database/data/Country"
class CountryController{
    static async allCountries(req,res,next){
        try{
            const data = await CountryData.getCountry()
            return res.status(200).json({message:"countries",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }

}
export default CountryController