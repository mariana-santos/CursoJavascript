//Comparar se dois objetos são iguais e se tem endereço de memória iguais 

function Endereco(rua, cep, cidade, numero){
    this.rua = rua;
    this.cep = cep;
    this.cidade = cidade;
    this.numero = numero;
}

const endereco1 = new Endereco('Rua da Silva', 0123, 'São Paulo', 01);
const endereco2 = new Endereco('Rua da Silva', 0123, 'São Paulo', 01);

function saoIguais(endereco1, endereco2){
    for (let chave in endereco1){
        for(let indice in endereco2){
            if (endereco1[chave] === endereco2[indice]) return true;
        }
    }
}

function temEnderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log('São iguais: ', saoIguais(endereco1, endereco2));
console.log('Têm endereço de memória iguais: ', temEnderecoMemoriaIguais(endereco1, endereco2));