import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js"
async function Paginar(req, res, next){
    try {
        let {limite = 5, pagina = 1, ordenacao = "titulo:1", } = req.query

        var [campoOrdenacao, ordem] = ordenacao.split(":")

        limite = parseInt(limite)
        pagina = parseInt(pagina)
        ordem = parseInt(ordem)

        const resultado = req.resultado

      if(limite !== 0 || pagina !== 0){
        const resultadoPaginado = await resultado.find() 
        .sort({[campoOrdenacao]: ordem})
        .skip((pagina - 1) * limite) // multiplica o numero de pagina pelo limite aplicado 0 * 5 = 0 | pagina  1 = (1) * 5 = 5 livros
        .limit(limite) // aplica o limite para ser retornado apos a busca
        .exec()
        res.status(200).json(resultadoPaginado);
      }else{
        next(new RequisicaoIncorreta)
      }
    } catch (error) {
        next(error)
    }
}

export default Paginar;