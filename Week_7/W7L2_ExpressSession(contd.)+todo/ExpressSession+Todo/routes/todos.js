const express=require("express")
const router=express.Router()
const todosController=require("../controllers/todos")
const authMiddleware = require("../middlewares/authMiddleware")

router.get("/", authMiddleware, todosController.getTodos)

module.exports=router