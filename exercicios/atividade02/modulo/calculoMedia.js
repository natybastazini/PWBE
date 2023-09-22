/********************************************************************
 * Objetivo: Arquivos de funções para calcular a média das notas.
 * Data: 22/09/2023. 
 * Autor: Natalia Bastazini.
 * Versao: 1.0
 ********************************************************************/

//Criação da função para calcular a média do aluno.
const calcularMedia = function(nota1, nota2, nota3, nota4){

    var valorNota1 = String(nota1).replace(',','.')
    var valorNota2 = String(nota2).replace(',','.')
    var valorNota3 = String(nota3).replace(',','.')
    var valorNota4 = String(nota4).replace(',','.')

    var valorMedia

    //Validação da entrada de dados vazia, apenas com números e valores que estejam entre 1 e 100.
    if (valorNota1 == '', valorNota2 == '', valorNota3 == '', valorNota4 == '')
        console.log('ERRO: É obrigatório a entrada de todos os valores!!')
    else if (isNaN(valorNota1) || isNaN(valorNota2) || isNaN(valorNota3) || isNaN(valorNota4))
        console.log('ERRO: É obrigatório a entrada somente de números!!')
    else if (valorNota1 < 0 || valorNota1 > 100 || valorNota2 < 0 || valorNota2 > 100 || valorNota3 < 0 || valorNota3 > 100 || valorNota4 < 0 || valorNota4 > 100)
        console.log('ERRO: É obrigatórios inserir apenas notas com valores que estão entre 0 e 100!!')
    else
        //Opereção para obter o valor da média.  
        valorMedia = (Number(valorNota1) + Number(valorNota2) + Number(valorNota3) + Number(valorNota4)) / 4
    
    return valorMedia
}

//Criação da função que verifica a média.
const verificarMedia = function(media){

    var valorMedia = Number(media)

    var verificar

    if (valorMedia >= 70)
        verificar = ('O aluno está APROVADO!!')
    else if (valorMedia >= 50 || valorMedia <= 69)
        verificar = ('O aluno está no EXAME!!')
    else 
        verificar = ('O aluno está REPROVADO!!')

    return verificar
}

//Criação da função para calcular a média do aluno que está no exame.
const calcularMediaExame = function(valorMedia, nota5){

    var media1 = String(valorMedia).replace(',','.')
    var valorNota5 = String(nota5).replace(',','.')

    var mediaExame

    //Operação para obter uma nova média com o valor do exame.
    mediaExame = (Number(media1) + Number(valorNota5)) / 2

    return mediaExame
}

const verificarMediaExame = function(mediaExame){

    var valorMediaExame = Number(mediaExame)

    var verificar

    if (valorMediaExame >= 60)
        verificar = ('APROVADO!!')
    else 
        verificar = ('REPROVADO!!')

    return verificar

}

console.log(calcularMedia ('40', '50', '60', '50'))
console.log(verificarAprovacao ('10'))
console.log(calcularMediaExame ('50', '100'))
console.log(verificarAprovacaoExame ('75'))

module.exports = {
    calcularMedia, verificarMedia, calcularMediaExame, verificarMediaExame 
}

