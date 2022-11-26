import { postCart } from "../controllers/cartController.js";
import {Router} from "express";
import { cartSchemaValidate } from "../middlewares/cartSchemaValidate.js";
import { getCart } from "../controllers/cartController.js";
import { deleteCart } from "../controllers/cartController.js";

const router = Router();
router.post("/cart",cartSchemaValidate, postCart);
router.get("/cart", getCart);
router.delete("/cart/:id", deleteCart);
export default router;