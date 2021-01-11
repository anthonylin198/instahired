const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
  },
  bio: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
  isAuthenticated: {
    type: Boolean,
  },
});

module.exports =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);
