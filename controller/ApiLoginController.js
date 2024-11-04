import userModel from "../model/userModel";
import bcrypt from "bcryptjs";

const Login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);
    if (!user || user.length === 0) { 
      return res.status(400).send("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send("Username or Password not match");
    } else {
      req.session.user = user;
      res.status(200).send("Login success");
    }
}
const Logout = async (req, res) => {
  req.session.destroy();
  res.status(200).send("Logout success");
};
export default {
  Login,
  Logout,
};