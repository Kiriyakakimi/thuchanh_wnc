import userModel from "../model/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secretKey = "secret";

const Login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);
    if (!user || user.length === 0) { 
      return res.status(400).send("User not found");
    }
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
      res.json({ token });
  } else {
      res.status(401).json({ message: 'Invalid credentials' });
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