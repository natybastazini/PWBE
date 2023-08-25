/************************************************************
 * Objetivo: Criar uma calculadora.
 * Data: 11/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/
//Import da biblioteca
var calculosMatematicos = require('./modulo/calculosMatematicos.js')

//Import da biblioteca de entrada de dados.
var readline = require('readline');

//Criando o objeto para manipular as entradas do usuário.
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o primero valor: ', function(numero1){
    let valor1 = numero1.replace(',','.')
    entradaDeDados.question('Digite o sugundo valor: ', function(numero2){
        let valor2 = numero2.replace(',','.')

        //Entrada de dados para escolher a opção de cálculo.
        entradaDeDados.question('Escolha uma opção de cálculo: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR] ', function(opcao){
            //toUpperCase() - converte uma String para MAIUSCULO.
            //toLowerCase() - converte uma String para MINUSCULO.
            let operacao = opcao.toUpperCase()
            let resultado

            if (valor1 == '' || valor2 == '')
                //Validação da entrada de dados vazia.
                console.log('ERRO: É obrigatório a entrada de dados nos valores')
            else if (isNaN(valor1) || isNaN(valor2))
                //Validação da entrada de dados apenas com números.
                console.log('ERRO: É obrigatório a entrada somente de números')
            else{
                //Conversão de String para número.
                valor1 = Number(valor1)
                valor2 = Number(valor2)

                // //Validação do tipo de operação matemática.
                // if (operacao == 'SOMAR'){
                //     resultado = valor1 + valor2
                // }else if (operacao == 'SUBTRAIR'){
                //     resultado = valor1 - valor2
                // }else if (operacao == 'MULTIPLICAR'){
                //     resultado = valor1 * valor2
                // }else if (operacao == 'DIVIDIR'){
                //     //Validação da entrada de dados 0 no valor 2.
                //     if (valor2 == 0)
                //         console.log('ERRO: Não é possível realizar uma divisão por 0!!')
                //     else 
                //         resultado = valor1 / valor2

                // //Validação para operações matemáticas inválidas.    
                // }else
                //     console.log('ERRO: É obrigatório escolher apenas as operações listadas.')

                resultado = calculosMatematicos.calculadora(valor1, valor2, operacao)

                //Validação da variável undelfined.    
                if(resultado)
                    console.log(resultado)

            }
        })
    })
})


