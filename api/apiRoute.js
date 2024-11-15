import express from 'express';
import ApiUsercontroller from '../controller/ApiUsercontroller';
import ApiLogincontroller from '../controller/ApiLoginController';
import ApiProductcontroller from '../controller/ApiProductController';
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
    router.get('/product', ApiProductcontroller.getAllProducts)
    router.get('/product/:masp', ApiProductcontroller.getProductDetails)
    router.get('/product/group/:idnhom', ApiProductcontroller.getProductsByGroup)
    router.get('/group', ApiProductcontroller.getAllGroups)
    return app.use('/api', router)
}
export default initApiRouter