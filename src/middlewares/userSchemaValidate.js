import { userSchema } from "../models/schemas.js";

export function userSchemaValidate(req, res, next){
    const {nome, email, senha, confirmSenha} = req.body;
    const {error} = userSchema.validate({nome, email, senha, confirmSenha},{abortEarly:false});

    if(error){
        const errors = error.details.map((detail)=>detail.message);
        return res.status(400).send(errors);
    }
    next();
}