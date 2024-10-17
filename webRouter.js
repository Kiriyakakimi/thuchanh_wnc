import express from 'express';
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
import getAboutPage from './controller/AboutController';
import getHomePage from './controller/HomeController'
import getContractPage from './controller/ContractController';
import {getAllUser} from './controller/UserController'
const router = express.Router();
const initWebRouter = (app) => {
    router.get('/', getHomePage)
    router.get('/about', getAboutPage)
    router.get('/contract', getContractPage)
    router.get('/date', (req, res) => {
        res.send(myDateTime())
    })
    router.get('/geturl', (req, res) => {
        res.send(getURL.getParamsURL(req) + "<br>" + getURL.getPath(req))
    })
    router.get('/ejs', (req, res) => {
        res.render("test")
    })
    return app.use('/', router)
}
export default initWebRouter