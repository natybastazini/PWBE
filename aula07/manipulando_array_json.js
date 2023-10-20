/**********************************************************************
 * Objetivo: Trazer informações sobre os estados do Brasil;
 * Data: 20/10/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 **********************************************************************/

var estados_cidades = require('./modulo/estados_cidades.js')

const getListaDeEstados = function(){

    let estadosCidades = estados_cidades
    let ARRAYsigla = []
    let JSONsigla = {}
    let contador = 0

    while(contador > 27){
        ARRAYsigla.push(estadosCidades.estados[contador].sigla)
        contador++
    }

    JSONsigla.uf = ARRAYsigla
    JSONsigla.quantidade = ARRAYsigla.length

    return JSONsigla

}

console.log(getListaDeEstados())