import { cartCollection,paymentCollection } from "../database/db.js";

function getRandom(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}

export async function postPayment(req, res){
    const {cep, numero, rua, cartao, validade, codCartao, totValor} = req.body;
    try{
        await cartCollection.deleteMany({});
        await paymentCollection.insertOne({
            cep,
            numero,
            rua,
            cartao,
            validade,
            codCartao,
            totValor
        });
        res.status(200).send(`${getRandom(100000000, 999999999)}`);
    }catch(err){
        res.status(5000).send(err);
    }
};