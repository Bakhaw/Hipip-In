import User from "../models/User";
import { Strategy } from "passport-local";

const LocalStrategy = new Strategy(
  { usernameField: "email" },
  (email, password, done) => {
    User.findOne({ email })
      .select("+password")
      .exec((err, userMatch) => {
        if (err) {
          return done(err);
        }
        if (!userMatch) {
          return done(null, false, {
            message: "Incorrect email",
            success: false
          });
        }
        if (!userMatch.checkPassword(password)) {
          return done(null, false, {
            message: "Incorrect password",
            success: false
          });
        }
        return done(null, userMatch, {
          message: `Welcome ${userMatch.firstname}`,
          success: true
        });
      });
  }
);

export default LocalStrategy;
