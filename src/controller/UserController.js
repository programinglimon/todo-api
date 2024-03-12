const UsersModel = require("../model/UsersModel");
const jwt = require("jsonwebtoken");


// user registration system
exports.registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UsersModel.create(reqBody);
    res.json({ status: "success", message: "registration complate" });
  } catch (error) {
    res.json({ status: "fail", message: error });
  }
};

// user login system
exports.login = async (req, res) => {
  try {
    let reqBody = req.body;
    let user = await UsersModel.find(reqBody);
    if (user.length > 0) {
      // JWT Token
      let payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: reqBody["email"],
      };
      let token = jwt.sign(payload, "123-xyz");
      res.json({ status: "success", message: "User found", token: token });
    } else {
      res.json({ status: "Fail", message: "User does not exit" });
    }

    res.json({ status: "success", message: "Login complate" });
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
};


// User profile read
exports.readProfile = async (req, res) => {
  try {
    let email = req.headers["email"];
    let result = await UsersModel.find({ email: email });
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
};



// User profile update
exports.updateProfile = async (req, res) => {
  try {
    let email = req.headers["email"];
    let reqBody = req.body;
    await UsersModel.updateOne({ email: email },reqBody);
    res.json({status : "success" , message:"update Complate"})
  } catch (error) {
    res.json({ status: "fail", message: error });
  }
};
