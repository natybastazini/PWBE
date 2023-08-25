

//Modelo tradicioanl de criar funções.
function calculadora (numero1, numero2, tipoCalculo){
    
    //Recebendo os valores dos argumentos da função em variáveis locais.
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado

    //Versão 2.0 - Utilizndo Switch Case.
    switch (operacao) {
        case "SOMAR":
            resultado = valor1 + valor2
            break;
    
        case "SUBTRAIR":
            resultado = valor1 - valor2
            break;  

        case "MULTIPLICAR":
            resultado = valor1 * valor2
            break;

        case "DIVIDIR":
            if (valor2 == 0)
                console.log('ERRO: Não é possível realizar uma divisão por 0!!')
            else 
                    resultado = valor1 / valor2
            break;

        default:
            console.log('ERRO: É obrigatório escolher apenas as operações listadas.')
            break;
    }
    if(resultado != undefined)
    return Number(resultado).toFixed(2)
    else
    return false

}

module.exports={
    calculadora
}