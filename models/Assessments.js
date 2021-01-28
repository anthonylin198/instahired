const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  name: { type: String },
  questions: [],
  applications: [],
});

module.exports =
  mongoose.models.User || mongoose.model("Assessment", AssessmentSchema);
