/************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada.
 * Data: 31/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

//Função para calcular uma tabuada.
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){
    //Entradas de dados que chegam pelos argumentos.
    let tabuada = String(valorTabuada).replace(',','.')
    let contInicial = String(contadorInicial).replace(',','.')
    let contFinal = String(contadorFinal).replace(',','.')

    let resultado
    let status = false

    // let valorAuxiliar

    //Validação para organizar os valores (menor e maior).
    if (Number(contFinal) < Number(contInicial)){
            // valorAuxiliar = contInicial
            // valorAuxiliar = contInicial
            // contInicial = contFinal
            // contFinal = valorAuxiliar

        contFinal = contadorInicial
        contInicial = contadorFinal
    }
        
    if (tabuada == '' || contInicial == '' || contFinal == '')
        console.log('ERRO: É obrigatório a entrada de todos os valores!!')
    else if (isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal))
        console.log('ERRO: É obrigatório a entrada somente de números!!')
    else{
        //Converte as variáveis em número.
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        tabuada = Number(tabuada)

        // //Exemplo usando o WHILE.
        // while(contInicial <= contFinal){
        //     resultado = tabuada * contInicial
        //     // console.log(tabuada + 'x' + contInicial + '=' + resultado)
        //     console.log(`${ tabuada} x ${contInicial} = ${resultado}`)
        //     // contInicial = contInicial + 1
        //     contInicial++
        //     // contInicial+=1

        //     status = true
        // }

        //Exemplo usando o FOR.
        for(; contInicial <= contFinal; contInicial++){
            resultado = tabuada * contInicial
            console.log(`${ tabuada} x ${contInicial} = ${resultado}`)
            status = true
        }
    }

    return status
}

// console.log(calcularTabuada(7,0,10))

module.exports = {
    calcularTabuada
}