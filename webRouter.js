import express from 'express';
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
import getAboutPage from './controller/AboutController';
import getHomePage from './controller/HomeController'
import getContractPage from './controller/ContractController';
import UserController from './controller/UserController'
import LoginController from './controller/LoginController';
import middleware, { checkRole } from './middleware/middleware';
const router = express.Router();
const initWebRouter = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contract', getContractPage)
    router.get('/user', middleware.checkRole(0), UserController.getAllUser)
    router.get('/user/:username',middleware.checkRole([0,1]), UserController.detailUser)
    router.get('/user/edit/:username',middleware.checkRole([0,1]), UserController.editUser)
    router.post('/user/edit/:username',middleware.checkRole([0,1]), UserController.updateUser)
    router.post('/user/delete/', middleware.checkRole(0), UserController.deleteUser)
    router.get('/add', UserController.addUser)
    router.post('/add',middleware.checkRole(0), UserController.createUser)
    router.post('/login', LoginController.Login)
    router.get('/login', LoginController.Login)
    router.get('/logout', LoginController.Logout)

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