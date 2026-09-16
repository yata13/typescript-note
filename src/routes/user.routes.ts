import { Router} from "express";
import { allUser,deleteUser, getUser, login, signup, update } from "../controller/user.controller";
const router = Router();

router.get('/', allUser);

router.get('/:id', getUser);

router.post('/signup', signup);

router.post('/login', login)

router.put('/:id', update)

router.delete('/:id', deleteUser)

export default router;