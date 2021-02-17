/*Criar um array que contenha objetos de faixa de preço, 
onde esses objetos contenham a tooltip para o user, o valor mínimo e o valor máximo*/

//Criação do construtor para a criação do objeto faixa de preço
function FaixaPreco(tooltip, min, max){
    this.tooltip = tooltip;
    this.min = min;
    this.max = max;
}

//Criação do array que tem como conteúdo três objetos do tipo FaixaPreco
let faixa = [
    new FaixaPreco('até R$700', 0, 700),
    new FaixaPreco('de R$700 até R$1000', 700, 1000),
    new FaixaPreco('R$1000 ou mais', 1000, 9999999)
];

console.log(faixa);
