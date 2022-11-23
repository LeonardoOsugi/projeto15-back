export function userPasswordInconpativel(req, res, next){
    const {senha, confirmSenha} = req.body;
    if(senha !== confirmSenha){
        res.status(400).send("Uma senha esta Diferente da outra");
        return
    }
    next();
}