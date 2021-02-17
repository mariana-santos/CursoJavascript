/* Criar uma função que exiba a quantidade de asteriscos que a linha pede
*/

function exibirAsteriscos(valor){
    let str = '';
    for (let i = 1; i <= valor; i++){
        
        for(let j = 0; j < i; j++){
            str += '*';
        }
        str += '\n';
    }
    console.log(str);
}

exibirAsteriscos(10);