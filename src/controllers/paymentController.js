import { paymentCollection } from "../database/db.js";

export async function postPayment(req, res){
    const {cep, numero, rua, cartao, validade, codCartao} = req.body;
    try{
        await paymentCollection.insertOne({
            cep,
            numero,
            rua,
            cartao,
            validade,
            codCartao
        });
        res.status(200).send({message: "Pagamento feito com sucesso!"});
    }catch(err){
        res.status(5000).send(err);
    }
};