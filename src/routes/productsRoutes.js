import { getProduct } from "../controllers/productController.js";
import { Router } from "express";

const router = Router();
router.get("/products", getProduct);
export default router;