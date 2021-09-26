
import DiscussionData from "../database/data/DiscussionSpaces"

class DiscussionController{

static async getAll(req,res,next){
        try {
    
            const resultData = await DiscussionData.getAllDiscussions();
            console.log(resultData)
            if (resultData.length === 0)
                return res.status(400).json({error:"no discussionspace"})
            else
                return   res.status(200).json({message:"all discussionSpaces",resultData})
    
        } catch (err) {
            return next(new Error(err))
        }
}


static async getDiscussionByName(req, res, next){
    try {
        const input = req.query.type;
        const discussion = await DiscussionData.getDiscussionByName(input);
        if (discussion.length === 0)
            return res.status(400).json({error:"no discussionspace"})
        else
            return res.status(200).json({message:"discussionSpaces",discussion})
    } catch (err) {
        return next(new Error(err))
    }
}
}

export default  DiscussionController