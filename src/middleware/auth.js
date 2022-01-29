const jwt = require("jsonwebtoken");
const User = require("../models/user");

//Express Middleware function
const auth = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // getting the object back
    console.log(decoded);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send("Can't authenticate");
  }
};

module.exports = auth;
