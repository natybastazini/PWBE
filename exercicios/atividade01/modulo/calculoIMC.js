/************************************************************
 * Objetivo: Arquivos de funções para calcular o IMC.
 * Data: 15/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

//Criação da função para calcular o IMC.
const calcularImc = function(altura, peso){
    //Entradas de dados que chegam pelos argumentos.
    var valorAltura = String(altura).replace(',','.')
    var valorPeso = String(peso).replace(',','.')

    var valorImc
    
    //Validação da entrada de dados vazia e apenas com números.
    if (valorAltura == '', valorPeso == '', valorImc == '')
        console.log('ERRO: É obrigatório a entrada de todos os valores!!')
    else if (isNaN(valorAltura) || isNaN(valorPeso))
        console.log('ERRO: É obrigatório a entrada somente de números!!')
    else 
    //Opereção para obter o valor do Imc.    
    valorImc = Number(peso) / (Number(valorAltura) * Number(valorAltura))

return valorImc

}

//Criação de uma função para vereficação do IMC.
const verificarImc = function(imc){

    var valorImc = Number(imc)

    var verificar
    if (valorImc < 18.5)
       verificar = 'ABAIXO DO PESO!!'
    else if (valorImc >= 18.5 && valorImc <= 24.9)
        verificar = 'PESO NORMAL!!'
    else if (valorImc >= 25 && valorImc <= 29.9)
        verificar = 'ACIMA DO PESO (SOBREPESO'
    else if (valorImc >= 30 && valorImc <= 34.9)
        verificar = 'OBESIDADE I'
    else if (valorImc >= 35 && valorImc <= 39.9)
        verificar = 'OBESIDADE II'
    else if (valorImc >= 40)
        verificar = 'OBESIDADE III'
    
return verificar

}

// console.log(calcularImc('1.60', '54') )
// console.log(verificarImc(21))

module.exports = {
    calcularImc, verificarImc
}