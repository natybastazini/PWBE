/************************************************************
 * Objetivo: Criar um sistema que calcule o IMC de uma pessoa.
 * Data: 15/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

var calculoImc = require('./modulo/calculoIMC.js')

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
