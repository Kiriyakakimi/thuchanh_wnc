import bcrypt from 'bcrypt';
import userModel from '../model/userModel';
import UserController, { loginUser } from '../controller/UserController';

const renderLoginPage = (req, res) => {
    res.render('login'); 
};

const handleLogin = async (req, res) => {
    await UserController.loginUser(req, res);
}

export default {
    renderLoginPage,
    handleLogin
};
