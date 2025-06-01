const User = require("../models/user")
module.exports.renderSignup = (req, res) => {
  res.render("users/signup");
};

module.exports.Signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({
      username,
      email,
    });
    const registerdUser = await User.register(newUser, password);
    req.login(registerdUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wonderlust");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/users/signup");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  res.redirect(res.locals.redirectUrl);
};


module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out");
    res.redirect("/users/login");
  });
}