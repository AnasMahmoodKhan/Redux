const User = require("../models/User");
const jwt = require("jsonwebtoken");
const maxAge = 5 * 24 * 60 * 60;
const createJWT = id =>{
  return jwt.sign({id},'chatroom secret',{
    expiresIn : maxAge
  })
}
const alertError = (err) => {
  let errors = { name: "", email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "This email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = createJWT(user._id)
    res.cookie('jwt',token,{ httpOnly : true, maxAge: maxAge * 1000})
    res.status(201).join({ user });
  } catch (err) {
    let errors = alertError(err);
    res.status(400).json({ errors });
  }

  res.send("signup");
};

module.exports.login = (req, res) => {
  res.send("login");
};

module.exports.logout = (req, res) => {
  res.send("logout");
};
