import joi from "joi";

export const userSchema = joi.object({
    nome: joi.string().required().min(3).max(100),
    email: joi.string().email().required(),
    senha: joi.string().required(),
    confirmSenha: joi.string().required()
});

export const cartSchema = joi.object({
    url: joi.string().required(),
    nome: joi.string().required(),
    valor: joi.string().required()
});

export const paymentSchema = joi.object({
    cep: joi.string().required(),
    numero: joi.number().required(),
    rua: joi.string().required(),
    cartao: joi.string().valid("débito","crédito","Débito","Crédito"),
    validade: joi.string().required(),
    codCartao: joi.string().required(),
    totValor: joi.string().required()
});