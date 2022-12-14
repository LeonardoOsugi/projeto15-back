import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
    console.log("MongoDB conectado")
}catch(erro){
    console.log(erro);
}

export const db = mongoClient.db("ecomerc");
export const userCollection =  db.collection("user");
export const produtosCollection = db.collection("produtos");
export const cartCollection = db.collection("cart");
export const paymentCollection = db.collection("payment");