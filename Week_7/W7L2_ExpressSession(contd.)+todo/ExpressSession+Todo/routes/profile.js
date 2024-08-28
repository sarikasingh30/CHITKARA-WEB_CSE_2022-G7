const express=require("express")
const router=express.Router()
const profileHandler=require("../controllers/profile")
const authMiddleware=require("../middlewares/authMiddleware")
router.get("/", authMiddleware, profileHandler.getProfile)
module.exports=router