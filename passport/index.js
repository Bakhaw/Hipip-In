import passport from 'passport';
import LocalStrategy from './LocalStrategy';
import User from '../models/User';

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => done(null, user));
});

passport.use(LocalStrategy);

export default passport;
