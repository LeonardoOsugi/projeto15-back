import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { db, userCollection} from "../database/db.js";

export async function postCadastro(req, res){
    const {nome, email, senha} = req.body;

    try{
        const hashPassword = bcrypt.hashSync(senha, 10);
        await userCollection.insertOne({nome, email, senha: hashPassword, confirmSenha: hashPassword});
        res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
};