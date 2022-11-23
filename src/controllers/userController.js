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

export async function postLogin(req, res){
    const {email, senha} = req.body;
    const token = uuidv4();
    try{
        const emailEncontrado = await userCollection.findOne({email});

        if(emailEncontrado&&bcrypt.compareSync(senha, emailEncontrado.senha)){
            await db.collection("sessions").insertOne({
                token,
                userId: emailEncontrado._id
            });
            res.status(200).send({token});
            return
        }else{
            res.sendStatus(401);
            return
        }
    }catch(error){
        res.status(5000).send(error);
    }
}