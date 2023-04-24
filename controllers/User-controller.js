const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Please provide both email and password" });
    } else {
      const user = await User.create({ ...req.body });

      res
        .status(StatusCodes.CREATED)
        .json({ created: true, email: user.email, id: user._id });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password, "hi theres...........................");
  try {
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Please provide both email and password" });
    }
    const user = await User.findOne({ email });

    if (user && user.password === password) {
      res
        .status(StatusCodes.OK)
        .json({ loginSuccess: true, user: user.email, id: user._id });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "No such user", loginSuccess: false });
    }
  } catch (error) {}
};

module.exports = { register, login };
