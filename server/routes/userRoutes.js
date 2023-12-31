const express = require("express")
const { createUserController,createManyUserController, getUserController, getSingleUserController, updateUserController,searchUserController, deleteUserController } = require("../controllers/userController")
const router = express.Router()

 //create user
router.post("/users", createUserController)
// create many
router.post("/users", createManyUserController)
//get all user
router.get("/users", getUserController)

//get single user
router.get("/users/:id", getSingleUserController)

//update user
router.put("/users/:id", updateUserController)

 // search user with name
router.get("/users/search/:key", searchUserController)

//delete user
router.delete("/users/:id", deleteUserController)


module.exports= router
