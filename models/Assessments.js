const mongoose = require("mongoose");

const AssessmentSchema = new mongoose.Schema({
  companyId: { type: String },
  name: { type: String },
  questions: [],
  applications: [],
});

module.exports =
  mongoose.models.User || mongoose.model("Assessment", AssessmentSchema);
