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
    cep: joi.number().required().min(8),
    numero: joi.number().required().min(3),
    rua: joi.string().required().min(5),
    cartao: joi.number().required().min(16),
    validade: joi.number().required().min(4),
    codCartao: joi.number().required().min(3)
});