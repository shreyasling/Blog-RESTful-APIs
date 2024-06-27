const mongoose=require("mongoose")
const {connectionURL}=require("../config/keys")

const connectmongodb=async()=>{
    try {
       await mongoose.connect(connectionURL);
       console.log("Database connect successfully") 
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=connectmongodb