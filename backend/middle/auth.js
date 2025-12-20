import jwt from 'jsonwebtoken';

 const auth=(req,res,next)=>
    {
      const header= req.headers.authorization;
      if(!header){
        return res.status(400).json("no token");
      }
      const token=header.split(" ")[1];
       try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
    } 
export default auth;