const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
  },
  name: { type: String },
  description: { type: String },
  jobs: [
    {
      name: {
        type: String,
      },
      job_description: {
        type: String,
      },
      location: {
        type: String,
      },
      open_applications: {
        type: Number,
      },
      assessment_id: {
        type: String,
      },
    },
  ],
  assessments: [Number],
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
