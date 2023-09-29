/************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON.
 * Data: 29/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ************************************************************/

// [ ] -> Representa a estrutura array.
// { } -> Representa a estrutura JSON.

const introducaoArray = function(){
    //Criando um array de forma manual.
    let listaDeNomes = ['José', 'Ana', 'Luis', 'Maria', 'Carlos','Eduardo']

    //Exibe os dados do array.
    console.log(listaDeNomes)
    //Exibe os dados do array em formato de tabela.
    console.table(listaDeNomes)
    //Retorna a qtde de elementos de um array.
    console.log(listaDeNomes.length)

    //Adiciona elemento na tabela 'no final'.
    listaDeNomes.push('Roberto')
    
    //Adiiciona elemento na tabela 'no começo'.
    listaDeNomes.unshift('Roberto')
    
    console.table(listaDeNomes)

    //Remove o último elemento do array.
    listaDeNomes.pop()

    //Remove o primeiro elemento do array.
    listaDeNomes.shift()

    //Remove um elemento baseado no índice, podendo definir a qtde de itens a serem excuídos.
    //Ex: splic(2,3) -> 2 é referente ao índice e 3 é refereente a qtde de itens. 
    listaDeNomes.splice(2,3)
    
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true)
    console.log(listaDeNomes)

    //typeof - Retorna o tipo de dados de um elemento.
    console.log(typeof(listaDeNomes[7]))
}

const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    //While
    // let cont = 0
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
    //     cont +=1
    // }

    //For
    // for(let cont=0; cont < listaDeProdutos.length; cont++)
    // console.log('Nome do Produto: ' + listaDeProdutos[cont])

    //foreach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + ' - Nome do Produto: ' + produto) 
    // })

    //Retorna o índice do elemento que foi encontrado.
    //Caso não exista o item buscado retorna -1.
    console.log(listaDeProdutos.indexOf('Impressora'))
  
    //Retorna veradeiro ou falso.
    console.log(listaDeProdutos.includes('Mouse'))


}

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto)

    //Exemplo com indexof.
    // let status

    // if (listaDeProdutos.indexOf(nome)>=0) 
    //     status = true
    // else
    //     status = false
        
    // return status  
    
    //Exemplo com includes.
    // return listaDeProdutos.includes(nome)

    let status = false

    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
            status = true
    })

    return status
}

console.log(filtrarProduto('mouse'))

// introducaoArray()
// percorrendoArray()
