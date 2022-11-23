
import { userCollection } from "../database/db.js";

export async function userExist(req, res, next){
    const {email} = req.body;

    const emailExist = await userCollection.findOne({email: email});

    if(emailExist){
        return res.status(409).send("Esse email já foi cadastrado");
    }
    next();
}