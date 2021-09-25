  
import jwt from "jsonwebtoken";


    class RoleCheckMiddleware {
       static async isAdmin(req, res, next){
        const authHeader = req.headers.authorization;
        if (!authHeader) {

          return res.status(403). json({error:"Please login"});;
        }
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)
          return res.status(401). json({error:"Unauthorized"});
          req.user = user;
          const { Role }  = req.user;
       
          if(Role === null){
           return res.status(400)
           .json({error:" You are not  Admin in order to perform this action"})
       }
     
       if(Role ==="1") return next();
       return res.status(400)
       .json({error:"You are not Admin to perform this action"})
        });
       
  
       }
    }
    export default RoleCheckMiddleware