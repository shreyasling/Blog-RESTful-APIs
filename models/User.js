const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true,minlength:6},
    //ROLE 1 SUPERADMIN 2-->NORMAL ADMIN 3-->NORMAL USER
    role:{type:Number,default:3},
    verificationCode:String,
    forgotPasswordCode:String,
    isVerified:{type:Boolean,default:false},
    profilePic:{type:mongoose.Types.ObjectId,ref:"file"}
},{timestamps:true})

const User=mongoose.model("user",userSchema);

module.exports=User;