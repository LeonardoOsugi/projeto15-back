import { postCadastro } from "../controllers/userController.js";
import { userExist } from "../middlewares/userExist.js";
import { userSchemaValidate } from "../middlewares/userSchemaValidate.js";
import { userPasswordInconpativel } from "../middlewares/userPasswordInconpativel.js";
import { postLogin } from "../controllers/userController.js";
import { userValidateLogin } from "../middlewares/userValidateLogin.js";

import { Router } from "express";

const router = Router();
router.post("/signup", userExist, userSchemaValidate, userPasswordInconpativel, postCadastro);
router.post("/signin",userValidateLogin, postLogin);
export default router;