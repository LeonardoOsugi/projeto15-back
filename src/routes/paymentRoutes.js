import { postPayment } from "../controllers/paymentController.js";
import { paymentSchemaValidate } from "../middlewares/paymentSchemaValidate.js";
import {Router} from "express";

const router = Router();
router.post("/payment",paymentSchemaValidate, postPayment);
export default router;