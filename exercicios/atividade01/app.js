/************************************************************
 * Objetivo: Criar um sistema que calcule o IMC de uma pessoa.
 * Data: 15/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

var calculoImc = require('./modulo/calculoIMC')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('-------- Descubra seu IMC ------')
entradaDeDados.question('Digite sua altura: ')
let valorAltura;
entradaDeDados.question('Digite seu peso:')
let valorPeso;
console.log('O valor do seu IMC é' + calcularImc)
console.log('Classificação: ' + verificarImc)

entradaDeDados.question('Digite sua altura: ', function(valorAlturas){
    let peso = valorPeso

    entradaDeDados.question('Digite seu peso: ', function(valorPeso){
        let altura = valorAltura
        let mostrarImc = calculoImc.calcularImc(altura, peso)
        let mostrarValidacao = calculoImc.verificarImc()
        
        console.log(mostrarImc.toFixed(2))
        console.log(mostrarValidacao)
    })
})