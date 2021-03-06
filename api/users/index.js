import dbConnect from "../../dbutils/dbConnect";
import User from "../../models/User";

// user login and get all users

module.exports = async (req, res) => {
  dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const notes = await User.find({}); // finds all notes in db
        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
