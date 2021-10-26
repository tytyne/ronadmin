import AboutData from "../database/data/About"
class AboutController{
    static async allAbout(req,res,next){
        try{
            const data = await AboutData.getAbout()
            return res.status(200).json({message:"about",data})
        }
        catch(err){
            return next(new Error(err)) 
        }
    }
    static async editAbout (req, res, next) {
      
            const aboutId = req.params.id;
            const about = await AboutData.getById(aboutId);
            if (about.length=== 0)
                return res.status(400).json({ error: "This  about can\'t be found!" })
            const data = req.body;
         
            const updated = await AboutData.updatingAbout(aboutId,data);
            res.status(200).json({message:"updated about",updated});
       
    }

}
export default AboutController