if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const reviewsRouter = require("./routes/reviews.js");
const listingsRouter = require("./routes/listings.js");
const usersRouter = require("./routes/users.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const port = 8080;


const dbUrl = process.env.ATLASTB_URL;
async function main() {
 await mongoose.connect(dbUrl);
}
main()
  .then((res) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.set("layout", "./layout");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

//Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const store = MongoStore.create({
  mongoUrl : dbUrl,
  crypto:{
    secret: process.env.SESSION_SECRET,
  },
  touchAfter : 24 *3600,
})

store.on("error",()=>{
  console.log("Error in mongo session store");
})
const sessionOption = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expire: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};


app.get("/", (req, res) => {
  console.log("i am root");
});
app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get("/demouser", async (req, res) => {
  const fakeUser = new User({
    email: "demouser@gmail.com",
    username: "Demo",
  });
  let registerdUser = await User.register(fakeUser, "helloworld");
  res.send(registerdUser);
});

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

//Server
app.listen(port, () => {
  console.log(`Listening to the port${port}`);
});
