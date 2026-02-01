import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },

  password: {
    type: String,
    required: function () {
      return this.authProvider === "local";
    },
  },

  image: String,

  authProvider: {
    type: String,
    enum: ["local", "google"],
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
