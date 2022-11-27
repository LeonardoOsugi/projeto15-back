import { paymentSchema } from "../models/schemas.js";

export function paymentSchemaValidate(req, res, next){
    const {cep, numero, rua, cartao, validade, codCartao, totValor} = req.body;
    const {error} = paymentSchema.validate({cep, numero, rua, cartao,validade ,codCartao, totValor});

    if(error){
        const errors = error.details.map((details)=> details.message);
        res.status(400).send(errors);
        return
    }
    next();
}