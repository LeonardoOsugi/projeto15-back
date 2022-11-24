import { cartSchema } from "../index.js";

export function cartSchemaValidate(req, res, next){
    const {url, nome, valor} = req.body;
    const {error} = cartSchema.validate({url, nome, valor},{abortEarly: false});

    if(error){
        const errors = error.details.map((details) => details.message);
        return res.status(400).send(errors);
    }
    next();
}