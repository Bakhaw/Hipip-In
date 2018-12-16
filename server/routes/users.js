import { Router } from 'express';
import User from '../models/User';

const router = Router();

// ? Get all users
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    return err ? console.log(err) : res.json(users);
  });
});

// ? Get all users (but not me)
router.get('/:email', (req, res) => {
  const { email } = req.params;
  User.find({ email: { $ne: email } }, (err, users) => {
    return err ? console.log(err) : res.json(users);
  });
});

export default router;
