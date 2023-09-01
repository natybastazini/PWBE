function calcular (valor, codigo){

    let valorVenda = valor
    let codigoCompra = codigo
    let resultado
    
    switch (codigoCompra){

        case "1":
            resultado = valorVenda - ((valorVenda * 8) / 100)
            break;

        case "2":
            resultado = valorVenda - ((valorVenda * 4) / 100)
            break;

        case "3":
            resultado = console.log('Em 2x de : R$' + valorVenda / 2)
            break;

        case "4":
            resultado = console.log('Em 4x de : R$' + valorVenda + (valorVenda (valorVenda * 8 / 100) / 4))
            break;

        default:
            console.log ('ERRO: Não foi possível realizar a operação, digite um código válido!!')
    }

    if (resultado != undefined){
        return resultado
    } else{
        return false
    }

    
}

module.exports={
    calcular
}