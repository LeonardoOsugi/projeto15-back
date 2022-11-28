import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import usersRouters from "./routes/userRoutes.js";
import productsRouters from "./routes/productsRoutes.js";
import cartsRouters from "./routes/cartRoutes.js";
import paymentsRouters from "./routes/paymentRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRouters);
app.use(productsRouters);
app.use(cartsRouters);
app.use(paymentsRouters);

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`runing in port: ${port}`));