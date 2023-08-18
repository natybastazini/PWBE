/************************************************************
 * Objetivo: Manipular entrada e saida de dados para o usuario.
 * Data: 04/08/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

//Import da biblioteca de entrada de dados via teclado.
var readline = require('readline');

//Criando um objeto entradaDeDados para ser uma referencia da biblioteca READLINE.
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função de CallBack que permite apresentar uma mensagem no terminal, e captar a digitação 
//do usuário;
//Obs: O dado digitado chegará para dentro da função através do seu argumento (nomeDoUsuario).

//Entrada de dados do nome.
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    //Recebe o nome digitado.
    var nome = nomeUsuario;

    //Entrada de dados da idade.
    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario;

        //Entrada de dados do telefone.
        entradaDeDados.question('Digite seu telefone: ', function(telefoneUsuario){
            //Recebe o nome digitado.
            var telefone = telefoneUsuario;
    
            //Entrada de dados do email.
            entradaDeDados.question('Digite seu email: ', function(emailUsuario){
                //Recebe o nome digitado.
                var email = emailUsuario;
    
    
            //Exibe uma mensagem no terminal com o nome digitado.
            console.log('Bem-vindo ao aplicativo, ' + nome);
            console.log('A idade informada foi, ' + idade);
            console.log('O telefone informado foi, ' + telefone);
            console.log('O email informado foi, ' + email);

        //encerra o processamento de dados.
        entradaDeDados.close();

            });
        });
    }); 
});