const express=require("express")
const router=express.Router()
const path=require("path")
const loginHandler=require("../controllers/login")
router.get("/", loginHandler.getLogin)
router.post("/",loginHandler.postLogin)

module.exports=router