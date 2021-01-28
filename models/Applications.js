const mongoose = require("mongoose");

const ApplicationsSchema = new mongoose.Schema({
  name: { type: String },
  answers: [],
  applications: [],
});

module.exports =
  mongoose.models.User || mongoose.model("Application", ApplicationsSchema);
