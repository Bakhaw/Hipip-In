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

router.post("/register", (req, res) => {
  const { lastname, firstname, email, password, genre } = req.body;

  User.findOne({ email }, (err, userMatch) => {
    if (userMatch) {
      return res.json(500, {
        error: `Sorry, already a user with this email: ${email}`
      });
    }
    const newUser = new User({
      lastname,
      firstname,
      email,
      password,
      genre
    });
    newUser.save((err, savedUser) => {
      if (err) return res.json(err);
      res.redirect("/");
    });
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  }),
  (req, res) => {
    return res.redirect("/");
  }
);

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
