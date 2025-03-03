const jwt =require("jsonwebtoken");

const Auth=async(req,res,next)=>{
    try{
        const token = req.cookies.token;
        if (!token) return res.status(403).send("Access denied.");
        jwt.verify(token, "bookstoretoken",async(err,data)=>{
            if(err){
                return res.status(403).json("Token is not validd")
            }
            req.author = data._id
            next();
        });
    
       
        
    }
    catch(e){
        res.status(401).send(e)
    }
   
}
module.exports= Auth;
