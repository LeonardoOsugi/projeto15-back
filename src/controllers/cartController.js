import { cartCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

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

export async function deleteCart(req, res){
    const {id} = req.params;
    try{
        await cartCollection.deleteOne({_id: ObjectId(id)});
        res.status(200).send({message: "Produto apagado com sucesso"})
    }catch(err){
        res.status(500).send({message: err.message});
    }
}