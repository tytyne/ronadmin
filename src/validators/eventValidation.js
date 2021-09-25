import Joi from "joi"

export class EventValidation{
    static signup(req,res,next){
        const Schema=Joi.object({
            EventName:Joi.string().min(5).required(),
            Description:Joi.string().min(10).required(),
            EventStartDate:Joi.date().min(10).required(),
            EventEndDate:Joi.date().min(10).required(),
            EventHomeDS:Joi.string().min(3).required(),
            EventHomeAs:Joi.string().min(3).required(),
            AccessType:Joi.string().min(5).required()
        })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ message: result.error.details[0].message }); 
        }
        next()

    }
}
