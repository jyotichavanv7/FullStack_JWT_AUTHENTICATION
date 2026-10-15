const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // 🌟 Check cookies first, if empty, check the Authorization Header fallback
  let token = req.cookies.token;

  if (!token && req.headers.authorization) {
    // Splits "Bearer <token>" to just get the token string
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.json({ status: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Invalid token" });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return res.json({ status: false, message: "User not found" });
      }
    }
  });
};
