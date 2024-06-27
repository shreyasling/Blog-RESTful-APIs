const express=require("express");
const router=express.Router();
const {authController}=require("../controller/index")
const {signupValidator,signinvalidator,emailValidator,verifyUserValidator,recoverPasswordValidator,changePasswordValidator,updateProfileValidator}=require("../validators/auth")
const validate=require("../validators/validate")
const hashPassword=require("../utils/hashPassword")


const isAuth=require("../middlewares/isAuth")

router.post("/signup",signupValidator,validate,authController.signup)

router.post("/signin",signinvalidator,validate,authController.signin)

router.post("/send-verification-email",emailValidator,validate,authController.verifycode)

router.post("/verify-user",verifyUserValidator,validate,authController.verifyUser)

router.post("/forgot-password-code",emailValidator,validate,authController.forgotPasswordCode)

router.post("/recover-password",recoverPasswordValidator,validate,authController.recoverPassword)

router.put("/change-password",changePasswordValidator,validate,isAuth,authController.changePassword)

router.put("/update-profile",isAuth,updateProfileValidator,validate,authController.updateProfile)

router.get("/current-user",isAuth,authController.currentUser)
module.exports=router;