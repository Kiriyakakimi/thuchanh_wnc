import express from 'express';
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
import getAboutPage from './controller/AboutController';
import getHomePage from './controller/HomeController'
import getContractPage from './controller/ContractController';
import UserController from './controller/UserController'
import LoginController from './controller/LoginController';
const router = express.Router();
const initWebRouter = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contract', getContractPage)
    router.get('/user', UserController.getAllUser)
    router.get('/user/:username', UserController.detailUser)
    router.get('/user/edit/:username', UserController.editUser)
    router.post('/user/edit/:username', UserController.updateUser)
    router.post('/user/delete/', UserController.deleteUser)
    router.get('/add', UserController.addUser)
    router.post('/add', UserController.createUser)
    router.get('/login', LoginController.renderLoginPage)
    router.post('/login', LoginController.handleLogin)
    router.get('/', (req, res) => {
        res.render({ user: req.session.user });
    });
    router.get('/date', (req, res) => {
        res.send(myDateTime())
    })
    router.get('/geturl', (req, res) => {
        res.send(getURL.getParamsURL(req) + "<br>" + getURL.getPath(req))
    })
    router.get('/ejs', (req, res) => {
        res.render("test")
    })
    router.get('/set-session', (req, res) => {
        req.session.user = {
            username: 'admin',
            password: '123456'
        };
        res.send('Session set');
    });

    router.get('/get-session', (req, res) => {
        res.send(req.session);
    });
    return app.use('/', router)
}
export default initWebRouter