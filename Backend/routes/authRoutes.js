const express = require("express");
const router = express.Router();

const {registerUser,loginUser,logoutUser} =require("../controllers/authControllers");

router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.post("/register", registerUser);

module.exports = router;