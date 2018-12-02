import User from '../models/User';
import { Strategy } from 'passport-local';

const LocalStrategy = new Strategy(
  { usernameField: 'email' },
  (email, password, done) => {
    User.findOne({ email })
      .select('+password')
      .exec((err, userMatch) => {
        if (err) {
          return done(err);
        }
        if (!userMatch) {
          return done(null, false, { message: 'Incorrect email' });
        }
        if (!userMatch.checkPassword(password)) {
          return done(null, false, { message: 'Incorrect password' });
        }
        return done(null, userMatch);
      });
  }
);

export default LocalStrategy;
