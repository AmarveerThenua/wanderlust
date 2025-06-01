const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js")
const userControllers = require("../comtrollers/users.js");

router.route("/signup").get(userControllers.renderSignup).post(userControllers.Signup);


router.route("/login").get(userControllers.renderLogin).post(saveRedirectUrl,passport.authenticate("local", {failureRedirect: "/users/login",failureFlash: true,}),userControllers.login);

  //Logout
router.get("/logout", userControllers.logout);

module.exports = router;
