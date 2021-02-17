/* Criar uma função que leia as ropriedades de um objeto 
e exibir somente as propriedades que são string */

const filme = {
    titulo: 'Bohemian Rhapsody', 
    ano: 2019,
    personagem: 'Freddie Mercury'
}

exibePropriedadesStr(filme);

function exibePropriedadesStr(obj){
    for(let chave in obj){
        if(typeof obj[chave] === 'string'){
            console.log(chave+ ': ', obj[chave]);
        }
    }
}