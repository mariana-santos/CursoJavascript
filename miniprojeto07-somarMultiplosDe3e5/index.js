/* Criar uma função que some todos os números até o limite 
imposto desde que o número seja múltiplo de 3 e 5 */

function somarMultiplos(limite){
    let soma = 0;

    for(let i = 0; i <= limite; i++){

        if(i % 3 == 0 || i % 5 == 0)
            soma += i;
    }

    console.log(soma);
    return soma;
}

somarMultiplos(10);