import express from 'express';
const router = express.Router();
import { register, login, profile } from '../controllers/veterinaryController.js';



router.get('/', register);

router.get('/login', login);

router.get('/profile', profile);

export default router;