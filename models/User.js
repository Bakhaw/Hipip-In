import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    lastname: {
      type: String,
      required: false
    },
    firstname: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false
    },
    password: {
      type: String,
      required: false,
      select: false
    },
    genre: {
      type: String,
      required: false
    }
  },
  { versionKey: false }
);

UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Hash password before saving it to database
UserSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('No password provided');
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
