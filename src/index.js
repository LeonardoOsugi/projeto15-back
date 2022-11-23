import express from "express";
import joi from "joi";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import usersRouters from "./routes/userRoutes.js"
const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRouters);

export const userSchema = joi.object({
    nome: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    confirmSenha: joi.string().required()
})

app.listen(5000, () => console.log("runing in port: 5000"));