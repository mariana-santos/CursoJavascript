/* Criar uma função que receba um valor e imprima de 1 até esse valor
 e se ele é ímpar ou par */

function parOuImpar(limite){
    let result = '';
    for (let i = 1; i <= limite; i++){
        result += i%2 === 0 ? i + ' par \n' : i + ' ímpar \n'; 
        /*a variável resultado se atualiza cada vez que passa no laço e caso i seja par
        (divisível por 2), ele adiciona "i par" e quebra a linha, caso contrário
        ele adiciona "i ímpar" e quebra a linha dentro da variável também*/
    }
    return result;
}

const result = parOuImpar(10);
console.log(result);