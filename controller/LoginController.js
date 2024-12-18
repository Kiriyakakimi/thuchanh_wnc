import session from "express-session";
import userModel from "../model/userModel";
import bcrypt from "bcryptjs";

const Login = async (req, res) => {
  if (req.method === "GET") {
    res.render("login", {
      session: req.session
    });
    return;
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);

    if (!user || user.length === 0) { 
      return res.status(400).send("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send("Username or Password not match");
    } else {
      req.session.user = {
        username: user.username,
        role:user.role
      };
      req.session.user = user;
      res.redirect("/");
    }
  }
};
const Logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/login");
};
export default {
  Login,
  Logout,
};