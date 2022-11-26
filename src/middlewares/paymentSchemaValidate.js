import { paymentSchema } from "../index.js";

export function paymentSchemaValidate(req, res, next){
    const {cep, numero, rua, cartao, validade, codCartao} = req.body;
    const {error} = paymentSchema.validate({cep, numero, rua, cartao,validade ,codCartao});

    if(error){
        const errors = error.details.map((details)=> details.message);
        res.status(400).send(errors);
        return
    }
    next();
}