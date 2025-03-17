const jwt = require("jsonwebtoken")

const authVerification =async (req,res,next)=>{ 
    const authToken = req.headers["authorization"];   // return Bearer Token
    console.log(authToken)
    const token = authToken && authToken.split(" ")[1]
    if(!token) {return res.status(404).json({success:false,msg: "Token not found!"})}

    /// decode the token
    try {
        const decode = jwt.verify(token,process.env.KEY); 
        req.companyDetails = {id:decode?.id,companyName:decode?.companyName,register:decode?.reg_date}      
        next()
    } catch (error) {
        
        res.status(401).json({success:false, redirectUrl:"/", msg:error})
        
    }   
  
}


module.exports = authVerification