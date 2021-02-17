/* Criar um objeto endereço com rua, cep, cidade, bairro,
número e uma função exibirEndereço(endereco)*/

function Endereco(rua, cep, cidade, bairro, numero){
    this.rua = rua;
    this.cep = cep;
    this.cidade = cidade;
    this.bairro = bairro;
    this.numero = numero;

}

function exibirEndereco(Endereco){
    for(chave in Endereco){
        console.log(chave + ': '+Endereco[chave]);
    }
}

let minhaCasa = new Endereco('Armando Mamede Junior', 01234567, 'São Paulo', 'Guaianazes', 2);

exibirEndereco(minhaCasa);