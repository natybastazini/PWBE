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

const manipulandoArrayJson = function(){
    /*
    Existem diversos tipos de dados para a integração de tecnologias.
    Exemplo1 - XML <atributo> valor </atributo>
    
    Exemplo2 - JSON { atributo: valor } -> JSON.
    */
    //Criando um JSON manual.
    let contato = {nome: 'Natália Bastazini', telefone: '40028922', email: 'naty@gmail.com '}
    let contato2 = {nome: 'Lucas Bastazini', telefone: '22982004', email: 'lucas@gmail.com '}
    let contato3 = {nome: 'Angela Bastazini', telefone: '40018922', email: 'angela@gmail.com '}

    //Criando array que tem objetos JSON.
    let arrayContatos = [contato, contato2, contato3]


    //Criando novos atributos no JSON de forma dinâmica.
    contato.celular = '11 940028922'
    contato.data_nascimento = '2000-10-06'
    contato.idade = 23

    // console.log(typeof(contato))


    //Para extrair o conteudo de cada atributo do JSON.
    console.log('Nome: ' + contato.nome)
    console.log('Telefone: ' + contato.telefone)
    console.log('Email: ' + contato.email)
    console.log('Celular; ' + contato.celular)
    console.log('Data nascimento: ' + contato.data_nascimento)
    console.log('Idade: ' + contato.idade)

    // console.log(arrayContatos)

    // console.log(arrayContatos[0])
    // console.log(arrayContatos[1])
    // console.log(arrayContatos[0].nome)

    //Percorrendo array e JSON.

    arrayContatos.forEach(function(dados){

        console.log('\n****************************************')
        console.log('Nome: ' + dados.nome)
        console.log('Telefone: ' + dados.telefone)
        console.log('Email: ' + dados.email)

        //Tratamento para validar a impressão dos valores.
        if(dados.celular != undefined)
            console.log('Celular; ' + dados.celular)
        if(dados.data_nascimento != undefined)
            console.log('Data nascimento: ' + dados.data_nascimento)
        if(dados.idade != undefined)
        console.log('Idade: ' + dados.idade)
    })


}

const produtosArrayJson = function(){
    let listaCores = [
                        {id: 1, nome: 'Branco'},
                        {id: 2, nome: 'Preto'},
                        {id: 3, nome: 'Cinza'},
                        {id: 4, nome: 'Rosa'},
                        {id: 5, nome: 'Vermelho'},
                        {id: 6, nome: 'Azul'}        
                     ]

    let listaMarcas = [
                        {id:1, nome: 'Dell'},
                        {id:2, nome: 'Lenovo'},
                        {id:3, nome: 'Apple'},
                        {id:4, nome: 'Logitech'},
                        {id:5, nome: 'Positivo'},
                        {id:6, nome: 'Multilaser'},
                        {id:7, nome: 'Razer'}
                     ]                 

    let listacategorias = [
                            {id: 1, nome: 'Hardware', descricao: 'Hardware'},
                            {id: 2, nome: 'Periférico', descricao: 'Periférico'},
                            {id: 3, nome: 'Gamer', descricao: 'Gamer'},
                            {id: 4, nome: 'Acessórios', descricao: 'Acessórios'},
                          ]
                        
    //Cria um objeto do tipo JSON para o array de produtos.                      
    let JSONProdutos = {}
    
    //Cria um objeto do tipo ARRAY para guardar os produtos.
    let ARRAYProdutos = []

    //Objeto para criar os produtos.
    let produto1 = {id: 1, 
                    nome: 'Mouse',
                    descricao: 'Mouse optico com fio', 
                    categoria: listacategorias[1],
                    marca: listaMarcas[0],
                    cor:[
                        listaCores[0],
                        listaCores[1],
                        listaCores[2]
                        ]
                   }

    let produto2 = {id: 2, 
                    nome: 'Teclado',
                    descricao: 'Teclado com fio padrão ABNT', 
                    categoria: listacategorias[1],
                    marca: listaMarcas[3],
                    cor: listaCores
                   }
    
    let produto3 = {id: 3, 
                    nome: 'Fone',
                    descricao: 'Fone com fio', 
                    categoria: listacategorias[1],
                    marca: listaMarcas[6],
                    cor:[
                        listaCores[0],
                        listaCores[1],
                        listaCores[3]
                        ]
                   }

    let produto4 = {id: 4, 
                    nome: 'Monitor',
                    descricao: 'Monitor', 
                    categoria: listacategorias[1],
                    marca: listaMarcas[0],
                    cor:[
                        listaCores[0],
                        listaCores[1]
                        ]
                   }
                   

    
    //Adicionando os produtos no array de produtos.
    ARRAYProdutos.push(produto1)
    ARRAYProdutos.push(produto2)
    ARRAYProdutos.push(produto3)
    ARRAYProdutos.push(produto4)

    //Adiciona o atributo produto e coloca o array de produtos.
    JSONProdutos.produtos = ARRAYProdutos
    //Adiciona o atributo count e coloca a qtde de produtos.
    JSONProdutos.count = ARRAYProdutos.length
    //Adiciona o atributo status e coloca o código 200 que é requisição bem sucedida.
    JSONProdutos.status = 200

    // console.log(JSONProdutos)
}



const exibirProdutos = function(){
    console.log('******************** LISTAGEM DE PRODUTOS ********************')
    console.log('Nome: ' + produtosArrayJson)
    console.log('Descrição: ' + produtosArrayJson)
    console.log('Categoria: ' + produtosArrayJson)
    console.log('Marca: ' + produtosArrayJson)
    console.log('Cor:' + produtosArrayJson)
}

exibirProdutos()
// produtosArrayJson()
// manipulandoArrayJson()
// introducaoArray()
// percorrendoArray()
