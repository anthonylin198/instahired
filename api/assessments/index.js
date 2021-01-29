// Create assessment
// Get assessment based off a key
// login the user. Check the username with the database, make sure password matches
import dbConnect from "../../dbutils/dbConnect";

import Assessment from "../../models/Assessments";

// ! user signup, and get specific user based off JWT

module.exports = async (req, res) => {
  dbConnect();
  const { method } = req;
  // When assessment is created, we have to have an id attached
  switch (method) {
    case "POST":
      const { name, questions, applications } = req.body;
      try {
        let assessment = new Assessment({
          name,
          questions,
          applications,
        });
        const assessmentData = await Assessment.create(assessment);
        res.status(201).json({ success: true, assessmentData });
      } catch (err) {
        res.status(400).json({ success: false, error: err });
      }
      break;
    // get a specific company
    default:
      res.status(400).json({ success: false });
      break;
  }
};
