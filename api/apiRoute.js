import express from 'express';
import ApiUsercontroller from '../controller/ApiUsercontroller';
import ApiLogincontroller from '../controller/ApiLoginController';
const router = express.Router();
const initApiRouter = (app) => {
    router.get('/user', ApiUsercontroller.getAllUser)
    router.get('/user/:username', ApiUsercontroller.detailUser)
    router.get('/user/edit/:username', ApiUsercontroller.editUser)
    router.post('/user/edit/:username', ApiUsercontroller.updateUser)
    router.post('/user/delete/', ApiUsercontroller.deleteUser)
    router.get('/add', ApiUsercontroller.addUser)
    router.post('/add', ApiUsercontroller.createUser)
    router.post('/login', ApiLogincontroller.Login)
    router.get('/login', ApiLogincontroller.Login)
    router.get('/logout', ApiLogincontroller.Logout)
    return app.use('/api', router)
}
export default initApiRouter