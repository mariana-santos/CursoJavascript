//Compara alguns valores e retorna algo dependendo da divisibilidade do número comparado

//Se é divisível por 3: retorna fizz
//Se é divisível por 5: retorna buzz
//Se é divisível por 3 e 5: retorna fizzbuzz
//Se não é divisível por 3 nem 5: retorna o próprio número
//Compara se a entrada é um número

function fizzbuzz(number){

    if(typeof number !== 'number'){
        return 'Não é um número!';
    }
    else if (number % 3 === 0 && number % 5 !== 0){
        return 'fizz';
    }
    else if (number % 5 === 0 && number % 3 !== 0){
        return 'buzz';
    }
    else if (number % 3 === 0 && number % 5 === 0){
        return 'fizzbuzz';
    }
    else {
        return number;
    }

}

const resultado = fizzbuzz(15);
console.log(resultado);