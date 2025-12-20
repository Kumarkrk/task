import Schema from "../Structure/Schema.js";
export const create=async(req,res)=>
{
    const data=await Schema.create({...req.body, creatorId: req.user.id} );
    return res.status(200).json(data);
}
export const get=async(req,res)=>
{
    const{id}=req.params;
    const data=await Schema.findById(id);
    if(!data)
    {
        return res.status(400).json({mssg:"collection not exist"});
    }
    return res.status(200).json(data);
}
export const getall=async(req,res)=>
{
    if(req.user.role==="Admin")
    {
        const task=await Schema.find();
        return res.json(task);
    }
    
  const task=await Schema.find({creatorId:req.user.id});
  return res.json(task);
    
}
export const delete1=async(req,res)=>
{
    const {id}=req.params;
    const data=await Schema.findByIdAndDelete(id);
    return res.status(200).json({mssg:"collections deleted sucessfully"});
}
export const update=async(req,res)=>
{
      const {id}=req.params;
      const t=await Schema.findById(id);
      if(!t)
      {
        return res.status(400).json({mssg:"data is not found"});
      }
   
    if(req.user.role!=='Admin' && t.creatorId.toString()!==req.user.id)
    {
        return res.status(400).json({mssg:"Acess denied"});
    }
 const data=await Schema.findByIdAndUpdate(id,req.body,{new:true});
   
    return res.status(200).json(data);
}
