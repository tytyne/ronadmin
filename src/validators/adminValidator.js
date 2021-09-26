
import Joi from "joi"
import passwordComplexity from "joi-password-complexity";

export default class AdminValidation{
    static create(req,res,next){
        const Schema=Joi.object({
            email:Joi.string().min(5).email().required(),
            firstname:Joi.string().min(3).required(),
            lastname:Joi.string().min(3).required(),
            phone:Joi.string().min(8).required(),
            password: new passwordComplexity()
        
        })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ error: result.error.details[0].message }); 
        }
        next()

    }
    static reset(req,res,next){
        const Schema=Joi.object({

            Password: new passwordComplexity(),
            ConfirmPassword:Joi.string().min(3).required(),
        
        })
        const result=Schema.validate(req.body);
        if(result.error){
            return res.status(400).json({ error: result.error.details[0].message }); 
        }
        next()

    }
}
