// Criar uma função que exiba os números primos até o limite dado.

function exibirPrimos(limite){

    for (let i = 1; i <= limite; i++){
        if(ehPrimo(i)) console.log(i+ ' é primo');
    }
}

exibirPrimos(15);

function ehPrimo(numero){
    let divisiveis = 0;
        
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0) divisiveis++;
    }

    if(divisiveis === 2) return true;
    else return false;
}
