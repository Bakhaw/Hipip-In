import { Router } from "express";
import passport from "../passport";
import User from "../models/User";

const router = Router();

router.get("/profile", (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({ user });
  } else {
    return res.json({ user: null });
  }
});

router.post("/checkIfUserExists", (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (user) {
      return res.json({
        message: `Sorry, already a user with this email: ${email}`,
        success: false
      });
    } else {
      return res.json({
        message: `Email is valid: ${email}`,
        success: true
      });
    }
  });
});

router.post("/register", (req, res) => {
  const { lastname, firstname, email, password, genre, hobbies } = req.body;
  console.log(req.body);
  User.findOne({ email }, (err, user) => {
    if (err) return console.log(err);

    const newUser = new User({
      lastname,
      firstname,
      email,
      password,
      genre,
      hobbies: JSON.parse(hobbies)
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);
      return res.json({
        message: "Compte créé avec succès",
        success: true,
        user: savedUser
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json(info); // ? Info stands for done() passed in LocalStrategy.js
    }
    req.logIn(user, err => {
      if (err) return next(err);
      return res.json(info); // ? same, Info stands for done() passed in LocalStrategy.js
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid", { path: "/", domain: "localhost:8080" });
    return res.json({ message: "Logged out!" });
  } else {
    return res.json({ message: "No user to log out ..." });
  }
});

export default router;
