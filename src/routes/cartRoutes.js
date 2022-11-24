import { postCart } from "../controllers/cartController.js";
import {Router} from "express";
import { cartSchemaValidate } from "../middlewares/cartSchemaValidate.js";
import { getCart } from "../controllers/cartController.js";

const router = Router();
router.post("/cart",cartSchemaValidate, postCart);
router.get("/cart", getCart);
export default router;