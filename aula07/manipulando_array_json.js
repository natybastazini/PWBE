/**********************************************************************
 * Objetivo: Trazer informações sobre os estados do Brasil.
 * Data: 20/10/2023.
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 **********************************************************************/

var estados_cidades = require('./modulo/estados_cidades.js')

const getListaDeEstados = () =>{

    let estadosCidades = estados_cidades.estadosCidades.estados
    let JSONsigla = {}
    let ARRAYuf = []
   
    estadosCidades.forEach( estados => {
        ARRAYuf.push(estados.sigla)
    })

    JSONsigla.uf = ARRAYuf
    JSONsigla.quantidade = ARRAYuf.length

    return JSONsigla
}

// console.log(getListaDeEstados())

const getDadosEstado = (sigla) =>{

    let estadosCidades = estados_cidades.estadosCidades.estados
    let JSONsigla = {}

    estadosCidades.forEach( function(estados){

        if(estados.sigla.includes(sigla)){

            JSONsigla.uf = estados.sigla
            JSONsigla.descricao = estados.nome
            JSONsigla.capital = estados.capital
            JSONsigla.regiao = estados.regiao
        }
        
    })

    return JSONsigla
}

// console.log(getDadosEstado('RJ'))

const getCapitalEstado = (sigla) =>{

    let estadosCidades = estados_cidades.estadosCidades.estados
    let JSONsigla = {}

    estadosCidades.forEach( function(estados){

        if(estados.sigla.includes(sigla)){
            JSONsigla.capital = estados.capital
        }

    })

    return JSONsigla
}

// console.log(getCapitalEstado('SP'))

const getEstadosRegiao = (regiao) =>{

    let estadosCidades = estados_cidades.estadosCidades.estados

    let ARRAYestados = []

    estadosCidades.forEach( function(estados){

        if(estados.regiao.includes(regiao))
        {
            let JSONregiao = {}
            JSONregiao.uf = estados.sigla
            JSONregiao.descricao = estados.nome

            ARRAYestados.push(JSONregiao)   
        }

    })

    return ARRAYestados
}

// console.log(getEstadosRegiao('Sudeste'))

const getCapitalPais = () =>{

    let estadosCidades = estados_cidades.estadosCidades.estados
    ARRAYcapitais = []

    estadosCidades.forEach( function(estados){

        if(estados.includes())
        {
            let JSONestados = {}
            JSONestados.capital_atual = estados.capital_pais.capital
            JSONestados.uf = estados.sigla
            JSONestados.descricao = estados.nome
            JSONestados.capital = estados.capital
            JSONestados.regiao = estados.regiao
            JSONestados.capital_pais_ano_inicio = estados.capital_pais_ano_inicio
            JSONestados.capital_pais_ano_termino = estados.capital_pais_ano_termino


            ARRAYestados.push(JSONcapital)   
        }

        return ARRAYestados

    })
}

console.log(getCapitalPais())