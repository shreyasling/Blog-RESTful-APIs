const notFound=(req,res,next)=>{
    res.status(400).json({code:400,status:false,message:"Api not found"})
}

module.exports=notFound;