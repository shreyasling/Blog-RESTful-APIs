const express=require("express");
const router=express.Router();
const isAuth=require("../middlewares/isAuth")
const {postController}=require("../controller")
const{addPostValidator,updatedPostValidator,idValidator}=require("../validators/post")
const validate=require("../validators/validate")



router.post("/",isAuth,addPostValidator,validate,postController.addPost)

router.put("/:id",isAuth,updatedPostValidator,idValidator,validate,postController.updatePost)

router.delete("/:id",isAuth,idValidator,validate,postController.deletePost)

router.get("/",isAuth,postController.getPosts)

router.get("/:id",isAuth,idValidator,validate,postController.getPost)
module.exports=router;