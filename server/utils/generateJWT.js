import jwt from "jsonwebtoken";

const generateJWTAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 10 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // csrf protection
  });
};

export default generateJWTAndSetCookie;
