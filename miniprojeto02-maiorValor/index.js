//Criar uma função que descubra qual o maior valor entre dois números

function maiorValor(n1, n2){
    if(n1 > n2) console.log(n1 + ' maior');
    else if (n2 > n1) console.log (n2 + ' maior');
    else console.log(n1 + ' '+ n2 + ' iguais');
}

maiorValor(2, 5);