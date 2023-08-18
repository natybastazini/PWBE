/************************************************************
 * Objetivo: Mostrar as notas e média do aluno.
 * Data: 04/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

/* 
    Formas de criar variáveis e constantes.

    var - permite criar uma variável de escopo global, ou seja, irá existir em todo o projeto.
    let - permite criar uma variável de escopo local (bloco), ou seja, irá existir apenas dentro daquele bloco.
    const - permite criar uma contante que pode ser de escopo local ou global, sempre utilizamos em situações onde não haverá mudanção de conteúdo.

    Operadores de Comparação 
        ==  comparação de conteúdos. Ex: 1 == 1, Ex: 1 == '1'.
        <   menor.
        >   maior.
        <=  menor ou igual.
        =>  maior ou igual.
        !=  diferente.
        === comparação de conteúdos iguais e tipo de dados iguais Ex: 1 === 1, Ex: 1 === '1' .
        !== comparação de conteúdos deferentes e tipos de dados iguais.
        ==! comparação de conteúdos iguais e tipos de dados deferentes.

    Operadores Lógicos
        e         AND &&
        ou        OR ||
        negação   NOT !

    Conversão de String para número.
    parseInt() - converte uma String para números inteiros.
    parseFloat() - converte uma String para números reais.
    Number() - Converte uma String para número inteiro ou real conforme a necessidade.
*/



//Import da biblioteca de entrada de dados via teclado.
const { parse } = require('path');
var readline = require('readline');

//Criando um objeto boletim para ser uma referencia da biblioteca READLINE.
var boletim = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Coleta nome do aluno.
boletim.question('Digite o nome do aluno: ', function(nomeAluno){
    //Recebe o nome digitado.
    let aluno = nomeAluno;

    //Coleta as notas.
    boletim.question('Digite a nota 1:', function(nota1Aluno){
        //Recebe as notas e identifica que é uma variável tipo int.
        let nota1 = nota1Aluno.replace(',','.');

        //Coleta as notas.
        boletim.question('Digite a nota 2:', function(nota2Aluno){
            //Recebe as notas e identifica que é uma variável tipo int.
            let nota2 = nota2Aluno.replace(',','.');

            boletim.question('Digite a nota 3:', function(nota3Aluno){
                //Recebe as notas e identifica que é uma variável tipo int.
                let nota3 = nota3Aluno.replace(',','.');

                boletim.question('Digite a nota 4:', function(nota4Aluno){
                    //Recebe as notas e identifica que é uma variável tipo int.
                    let nota4 = nota4Aluno.replace(',','.');

                    //Validação para a entrada de dados vazia.
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: É obrigatório informar todas as notas!!')

                    //Validação para a entrada de dados não numéricos.    
                    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                        console.log('ERRO: É obrigatório a entrada de dados somente com números!!')

                    //Validação de entrada de números entre 0 e 10.
                    } else if(nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 <0 || nota3 > 10 || nota3 <0 || nota4 > 10 || nota4 <0) {

                        console.log('ERRO: É obrigatório a entrada de valores apeenas entre 0 e 10!! ')

                    }else {

                    //Exibe uma mensagem no terminal com o que foi digitado.

                    //toUpperCase() - Converte os caracteres em MAIÚSCULO.
                    //toLowerCase() - Converte os caracteres em MINÚSCULO.
                    console.log('Nome do aluno(a): ' + aluno.toUpperCase());
                    console.log('Nota 1: ' + nota1);
                    console.log('Nota 2: ' + nota2);
                    console.log('Nota 3: '+ nota3);
                    console.log('Nota 4: ' + nota4);


                    //Calcular.
                    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

                    //toFixed() - permite ajustar a qtde de casas decimais.
                    console.log('A média é: ' + media.toFixed(1).replace(',','.'));
                    }

                })
            })
        })
    })
})