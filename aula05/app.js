/************************************************************
 * Objetivo: Realizar o calculo de uma determinada tabuada.
 * Data: 31/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

//Import da biblioteca que calcula a tabuada.
var calculoTabuada = require('./modulo/calculoTabuada.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite uma tabuada:', function(valorTabuada){

    let tabuada = valorTabuada

    entradaDeDados.question('Digite o contador inicial:', function(valorInicial){
        let contador = valorInicial

        entradaDeDados.question('Digite o contador final:', function(valorFinal){
            let contadorFinal = valorFinal

            //Chama a função da tabuada encaminhando os valores que o usuário digitou.
            console.log(calculoTabuada.calcularTabuada(tabuada, contador, contadorFinal))
        })
    })
})
