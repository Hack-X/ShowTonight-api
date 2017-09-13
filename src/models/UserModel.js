import mongoose from "mongoose";

// Use native promises
mongoose.Promise = global.Promise;

let UserSchema = new mongoose.Schema({
  email: { type: String },
  firstname: { type: String },
  lastname: { type: String },
});

let User = mongoose.model('User', UserSchema);

const UserModel = {
  getUsers: () => {
    return User.find({}).exec();
  },
};

export default UserModel;
