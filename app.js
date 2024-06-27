const express=require("express");
const bodyParser=require("body-parser")
const dotenv=require("dotenv");
const morgan=require("morgan")
dotenv.config();

const connectmongodb=require("./init/mongodb")
const {authRoute,categoryRoute,fileRoute,postRoute}=require("./routes");
const {errorHandler}=require("./middlewares/index")
const notfound=require("./controller/notfound")
//conect database
connectmongodb();

const app=express();




app.use(express.json({limit:"500mb"}))
app.use(bodyParser.urlencoded({extended:true,limit:"500mb"}));
app.use(morgan("dev"));




//route section
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/category",categoryRoute);
app.use("/api/v1/file",fileRoute);
app.use("/api/v1/posts",postRoute)

//not found route
app.use("*",notfound)



//error middleware
app.use(errorHandler);
module.exports=app;