const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
  },
  bio: { type: String },
  applications: [Number],
  open_applications: { type: Number },
  closed_applications: { type: Number },
  date: {
    type: Date,
    default: Date.now,
  },
  isAuthenticated: {
    type: Boolean,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
