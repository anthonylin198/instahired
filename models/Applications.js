const mongoose = require("mongoose");

const ApplicationsSchema = new mongoose.Schema({
  name: { type: String },
  questions: [],
  applications: [],
});

module.exports =
  mongoose.models.User || mongoose.model("Application", ApplicationsSchema);
