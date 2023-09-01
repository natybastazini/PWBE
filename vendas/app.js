/************************************************************
 * Objetivo: Auxiliar no processo de vendas de uma loja.
 * Data: 25/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

var tabelaCondicoes = require('./modulo/tabelaCondicoes.js');
var readline = require('readline');


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite qual é o valor da venda: ', function(valorVenda){
    let valor = valorVenda.replace(',','.')

    console.log('1- À vista com 8% de desconto.')
    console.log('2- À vista no cartão, 4% de dseconto.')
    console.log('3- Em 2x, preço normal sem juros.')
    console.log('4- Em 4x, preço acrescido de 8%.')
    console.log('---- Escolha uma das opções acima ----')

    entradaDeDados.question('Digite o CÓDIGO da sua compra: ', function(codigoCompra){
        let codigo = codigoCompra

        let resultado

        if (valor == ''){
            console.log('ERRO: É obrigatório digitar um valor!!')
        }
        else if (codigo == '' || codigo < 1 || codigo > 4){
            console.log('ERRO: O código que foi digitado é inválido!!') 
        }
        else if (isNaN(valor) || isNaN(codigo)){
            console.log('ERRO: É obrigatório apenas a utilização de números!!')
        }
        else{
            valor = Number(valor)
            resultado = tabelaCondicoes.calcular(valor, codigo)

            if (resultado)
            console.log('O valor total da compra é de: R$'+ resultado)
            entradaDeDados.close()

        }
    })
})