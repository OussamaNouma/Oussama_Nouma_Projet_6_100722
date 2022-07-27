const express = require("express");
const router = express.Router();
const max = require("../middleware/limit")

const userController = require("../controllers/user");


router.post("/signup", userController.signup);

router.post("/login",max.limiter ,userController.login);

module.exports = router; 