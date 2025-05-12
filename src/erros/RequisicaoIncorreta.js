import ErroBase from "./ErroBase.js";
class RequisicaoIncorreta extends ErroBase{
    constructor(message = "Um ou mais dados fornecidos estao incorretos"){
        super(message, 400)
    }
}

export default RequisicaoIncorreta;