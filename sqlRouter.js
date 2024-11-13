import express from 'express';
import sqlUserController from './controller/sqlUserController';

const router = express.Router();

router.get('/user', sqlUserController.getUser);
router.post('/user', sqlUserController.createUser);
router.put('/user/:username', sqlUserController.updateUser);
router.delete('/user/:username', sqlUserController.deleteUser);

export default router;