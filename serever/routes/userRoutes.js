// routing for user api
// require express, becaue we have a router in express
const express = require("express");
const { registerUser } = require("../controller/userController");
const router = express.Router();

router.post("/register-user", registerUser);
module.exports = router;
