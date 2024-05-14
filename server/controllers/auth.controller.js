import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateJWTAndSetCookie from "../utils/generateJWT.js";
export const register = async (req, res) => {
  try {
    const { fullName, userName, email, password } = req.body;
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    // PUT random avatar here
    const avatarPic = `https://avatar.iran.liara.run/username?username=${fullName}`;
    // HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashedPassword,
      avatar: avatarPic,
    });
    if (newUser) {
      // GENERATE TOKEN HERE
      generateJWTAndSetCookie(res, newUser._id);
      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        avatar: newUser.avatar,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordValid = await bcryptjs.compare(
      password,
      user?.password || "",
    );
    if (!user || !isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateJWTAndSetCookie(res, user._id);
    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
