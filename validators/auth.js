const { check } = require("express-validator");
const validateEmail=require("../validators/validateEmail")
const mongoose=require("mongoose")

const signupValidator = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email")
    .isEmail()
    .withMessage("Enter valid email")
    .notEmpty()
    .withMessage("Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("required 6 char password")
    .notEmpty()
    .withMessage("Password is required"),
]; ///exactly same as req.body parametrs key value

const signinvalidator = [
  check("email")
    .isEmail()
    .withMessage("Enter valid email")
    .notEmpty()
    .withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];


const emailValidator=[
    check("email").isEmail().withMessage("Invalid email").notEmpty().withMessage("Email is required")
]

const verifyUserValidator=[
    check("email").isEmail().withMessage("Invalid email").notEmpty().withMessage("Email is required"),
    check("code").notEmpty().withMessage("Code is required")
]

const recoverPasswordValidator=[
  check("email").isEmail().withMessage("Invalid email").notEmpty().withMessage("Email is required"),
  check("code").notEmpty().withMessage("Code is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("required 6 char password")
    .notEmpty()
    .withMessage("Password is required"),
]

const changePasswordValidator=[
  check("oldPassword").notEmpty().withMessage("Old password is required"),
  check("newPassword").notEmpty().withMessage("New password is required")
]

const updateProfileValidator=[
  check("email").custom(async(email)=>{
    if(email){
      const isValidateEmail=validateEmail(email);
      if(!isValidateEmail){
        throw "Invalid Email"
      }

    }
  }),
  check("profilePic").custom(async(profilePic)=>{
    if(profilePic && !mongoose.Types.ObjectId.isValid(profilePic)){
      throw "Invalid profile Picture"
    }
  })
]
module.exports = { signupValidator,signinvalidator,emailValidator,verifyUserValidator,recoverPasswordValidator,changePasswordValidator,updateProfileValidator};
