import { produtos } from "../constants/produtos.js";

export function getProduct(req, res){
    try{
        res.send(produtos);
    }catch(error){
        res.status(5000).send(error);
    }
}