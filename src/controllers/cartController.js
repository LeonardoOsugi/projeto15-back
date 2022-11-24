import { cartCollection } from "../database/db.js";

export async function postCart(req, res){
    const {url, nome, valor} = req.body;
    try{
        await cartCollection.insertOne({url, nome, valor});
        res.sendStatus(201);
    }catch(error){
        res.status(500).send(error);
    }
};

export async function getCart(req, res){
    try{
        const todosCart = await cartCollection.find().toArray();
        res.send(todosCart);
    }catch(error){
        res.status(500).send(error);
    }
};