import { postCadastro } from "../controllers/userController.js";
import { userExist } from "../middlewares/userExist.js";
import { userSchemaValidate } from "../middlewares/userSchemaValidate.js";
import { userPasswordInconpativel } from "../middlewares/userPasswordInconpativel.js";

import { Router } from "express";

const router = Router();
router.post("/signup", userExist, userSchemaValidate, userPasswordInconpativel, postCadastro);
export default router;