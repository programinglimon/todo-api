const express = require("express");
const { registration, login, readProfile, updateProfile } = require("../controller/userController");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const { createTodo, readTodo, updateTodo, deleteTodo } = require("../controller/TodoController");

const router = express.Router()


// user registration , login , update , read

router.post("/registration" , registration)
router.post("/login" , login)
router.get("/read-profile", AuthMiddleware, readProfile)
router.put("/update-profile" ,AuthMiddleware, updateProfile)



// Todo create , read, update, delete
router.post("/todo/create-todo" , AuthMiddleware , createTodo)
router.get("/todo/read-todo" , AuthMiddleware , readTodo)
router.put("/todo/update-todo/:id" , AuthMiddleware , updateTodo)
router.delete("/todo/delete-todo/:id" , AuthMiddleware , deleteTodo)




module.exports= router;