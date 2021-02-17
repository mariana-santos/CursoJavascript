/* Criar uma função que a partir de um array de notas, mostre a média do aluno, onde:
0-59: F
60-69: D
70-79: C
80-89: B
90-99: A
*/

const array = [70, 70, 80];
console.log(devolverNota(array));

function devolverNota(notas) {
    
    let media = calcularMedia(notas);

    if (media < 60) return 'F';
    if (media < 70) return 'D';
    if (media < 80) return 'C';
    if (media < 90) return 'B';
    else return 'A';
}

function calcularMedia(array){
    let soma = 0;

    for(chave of array){
        soma += chave;
    }

    let media = soma / array.length;
    return media;
}
