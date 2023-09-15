/************************************************************
 * Objetivo: Arquivos de funções para calcular o IMC.
 * Data: 15/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

const calcularImc = function(altura, peso){
    var valorAltura = String(altura).replace(',','.')
    var valorPeso = String(peso).replace(',','.')

    var valorImc

    valorImc = peso / (valorAltura * valorAltura)


    if (valorAltura = '', valorPeso = '', valorImc = '')
        console.log('ERRO: É obrigatório a entrada de todos os valores!!')
    else if (isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal))
        console.log('ERRO: É obrigatório a entrada somente de números!!')

    if (valorImc < 18.5)
        console.log('ABAIXO DO PESO!!')
    else if (valorImc >= 18.5 || valorImc <= 24.9)
        console.log('PESO NORMAL!!')
    else if (valorImc >= 25 || valorImc <= 29.9)
        console.log('ACIMA DO PESO (SOBREPESO')
    else if (valorImc >= 30 || valorImc <= 34.9)
         console.log('OBESIDADE I')
    else if (valorImc >= 35 || valorImc <= 39.9)
        console.log('OBESIDADE II')
    else (valorImc >= 40)
        console.log('OBESIDADE III')
}