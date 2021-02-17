/*Arquivo principal com os testes feitos juntos com a aula iniciante de Javascript

Aula: https://www.youtube.com/watch?v=i6Oi-YtXnAU&feature=youtu.be

Anotações/explicações: https://drive.google.com/file/d/1WXCz5PgXpumV59kG_m1KnmHIsIcCuTd8/view?usp=sharing*/ 

//Exercício 01 variáveis:
let nome = 'Mariana';
let sobrenome = 'Fernandes';
let idade = 16;
let altura = 175;
let estaAprovado = true;

console.log('Nome: '+nome+'\n Idade: '+idade+'\n Altura: '+altura);

//Constantes
const valorIngressoAdulto = 20;
console.log(valorIngressoAdulto);

//Tipos primitivos

//let nome = 'Mariana'; -> String literal
// let idade = 16; -> number literal
// let estaAprovado = true; -> boolean
// let sobrenome; -> undefined tipo será definido quando for atribuído algum valor
// let corSelecionada = null; -> valor será atribuído depois

//objetos
let pessoa = {
    //key: 'value'
    nome: 'Mariana',
    sobrenome: 'Fernandes',
    idade: 16,
    altura: 175,
    estaAprovado: true
};

//array
let camy = ['Camylly', 17, 'São Paulo', 'DS', true];
console.log(camy.length); //tamanho do array
console.log(camy[0]); //mostra o que está na posição 0 desse array

//function
let corSite = "azul";

function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
    return corSite;
};

console.log(corSite);
resetaCor('verde', 'escuro');
console.log(corSite);

//incremento e decremento
console.log(idade++); // imprime 16, pois como o ++ tá depois da apresentação, ele não vai mostrar a idade atualizada
console.log(idade); //imprime 17, por causa da operação da linha anterior
console.log(++idade); //imprime 18, porque ele faz a operação antes de apresentar

idade -= 2;

//operadores de igualdade

//igualdade estrita (mais recomendado)
console.log(1 === 1); //imprime  true, porque é o mesmo valor e o mesmo tipo
console.log('1' === 1) //imprime a false, porque apesar do valor ser o mesmo, eles são de tipos diferentes

//igualdade solta
console.log(1 == 1); //imprime true porque tem o mesmo valor
console.log('1' == 1); //imprime true porque continua tendo o mesmo valor

//operador ternário
let pontos = 100;

let tipo = pontos > 100 ? 'premium' : 'comum';
//let ex = (condicao) ? 'a' : 'b';
//ou seja, se a condicao estiver correta, a variavel ex vai receber 'a', se não vai receber 'b'

//operadores lógicos
//operador AND (&&)
let maiorDeIdade = true;
let possuiCarteira = false;

let podeAplicar = maiorDeIdade && possuiCarteira; 
//se as duas variáveis comparadas forem true, ele retornará true, mas se alguma delas for false ele será false, nesse caso ele é true

console.log(podeAplicar); //vai imprimir false porque o possuiCarteira é false

//operador OR (||)
podeAplicar = maiorDeIdade || possuiCarteira; 
//se pelo menos uma das variáveis comparadas forem true, ele já vai retornar true

console.log('candidato pode aplicar: ', podeAplicar); //vai imprimir true porque o maiorDeIdade é true

//Operador NOT (!)
let candidatoRecusado = !podeAplicar; 
//se a variável podeAplicar for true, então candidatoRecusado receberá false, mas se podeAplicar for false o candidatoRecusado será true

console.log('candidato recusado: ', candidatoRecusado);//retorna false porque o candidato pode aplicar

//Condicionais: if... else e switch... case
numero = 263;

//Esse pequeno código verifica se a condição entre parênteses é verdadeira, caso seja ele executa o que tá no if, caso contrário ele executa o que está no "else"
if(numero % 2 == 0){ //nesse caso ele verifica se a variável numero é par
    console.log('Par');
}
else if (numero == 0){//Se o laço não cair na condição anterior, ele faz essa verificação
    console.log('Zero'); 
}
else{
    console.log('ímpar');
}

//Laços de repetição: for, while, do... while, for... in e for... of
for (let i = 0; i < 5; i++){
    //i = índice, executar enquanto a condição for verdadeira (i<5) e realiza o incremento
    console.log(i); 
}

let i = 0; //indice
while (i < 5){
    console.log(i); 
    i++; //incremento
}

//A única diferença é que ele executa pelo menos uma vez antes de verificar o índice
i = 0;
do{
    console.log(i);
    i++;
}while(i < 5);

//For in 
for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

//For of
for(let indice of camy){
    console.log(indice);
}

//Factory Function: criar um objeto "padrão" mais facilmente através de um método

function criarCelular (marcaCel, bateriaCel, tamanhoTela){
    return {
        marcaCel,
        bateriaCel,
        tamanhoTela,
        ligar(){
            console.log('Fazendo ligação...');
        }
    }
}

const cel1 = criarCelular('Samsung A10', 5000, 5.5);
console.log(cel1);

//Constructor function: mesmo objetivo que a factory function
function Celular (marcaCel, bateriaCel, tamanhoTela) {
    this.marcaCel = marcaCel,
    this.tamanhoTela = tamanhoTela,
    this.bateriaCel = bateriaCel,
    this.ligar = function() {
        console.log('Fazendo ligação...');
    }
}

//instanciando o objeto através do construtor
const cel2 = new Celular('Xiaomi Redmi', 70000, 6.0);
console.log(cel2);

//natureza dinâmica dos objetos
const mouse = {
    cor: 'preto',
    marca: 'dazz'
}
mouse.velocidade = 5000; //adiciona uma propriedade ao objeto já existente
mouse.trocarDPI = function() {
    console.log('Trocando DPI...');
}

//deletando propriedades e funções do objeto existente:
delete mouse.trocarDPI;
delete mouse.velocidade;

console.log(mouse);

//clonando objetos
//nesse exemplo o novo objeto receberá o objeto já criado celular com a adição da propriedade temDigital
const objCopia = Object.assign({temDigital: true}, cel1);

console.log(objCopia);

//Math
console.log(Math.random()); // -> gera um número aleatório de 0 a 1
console.log(Math.random() * (10 - 1) + 1); // -> gera um número aleatório de 1 a 10

console.log(Math.max(1000, 10, 3, 2, 1, 10000)); // -> gera o maior número entre os listados como parâmetro
console.log(Math.min(1000, 10, 3, 2, 1, 10000)); // -> faz o contrário do que o max, gera o menor número listado
console.log(Math.pow(5,2)); // -> calcula o primeiro parâmetro elevado ao segundo parâmetro 

//String: existe o tipo primitivo e o tipo objeto
let primitivo = 'Tipo primitivo';
let obj = new String('Tipo objeto');

console.log(primitivo.length); // -> mostra a quantidade de caracteres de uma string
console.log(primitivo[2]); // -> mostra o caracter que está no índice indicado, lembrando de que sempre começa no 0

console.log(primitivo.includes('Tipo')); // -> gera um true, porque na string indicada contém 'Tipo'
console.log(primitivo.includes('azul')); // -> gera um false, porque na string indicada contém 'azul'

console.log(primitivo.startsWith('Tipo')); // -> gera um true, porque a string indicada começa com 'Tipo'
console.log(primitivo.endsWith('primitivo')); // -> gera um true, porque a string indicada termina com 'primitivo'

console.log(primitivo.indexOf('v')); // -> gera o index em que 'v' está

console.log(primitivo.replace('Tipo', ''));// -> substitui uma parte da String, nesse caso ela vira só 'primitivo'

primitivo.trim(); //-> remove espaços desnecessários no início ou no final da string

console.log(obj.split(' ')); //-> separa a string a cada espaço que encontra, nesse caso ele mostra 'Tipo' e 'objeto' como duas coisas diferentes

//String com sequência de escape
let msg = 'Bom dia '+ nome +'. \nEssa é minha \'mensagem\'';

//String com template literal
let msgL = `Bom dia ${nome}. 
Essa é minha 'mensagem'`

//Date
const dataAtual = new Date(); //vai preencher com as informações de data e hora atuais
const data1 = new Date('March 06 2019 09:30'); //data e hora deifinidos na declaração da constante
const data2 = new Date(2019, 02, 06, 09, 30, 05); //data e hora definidos através dos números na ordem: ano, mês, dia, hora, minuto, segundo e ms

data2.getFullYear(); //retorna o ano
data2.setFullYear(2021); //muda o ano dessa data

//Formas de converter para String:
data1.toDateString(); //retorna só a data em String
data2.toTimeString(); //retorna a data e hora em string
dataAtual.toISOString(); //retorna as infos em números, como em SQL

//Constructor Function
//Exercício: criar um objeto postagem (miniprojeto13) através de um construtor

function Post(titulo, mensagem, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.mensagem = mensagem;
    this.comentarios = [];
    this.views = 0;
    this.estaAoVivo = false;
}

let post = new Post('a', 'b', 'c');

//Arrays
let numeros = [1, 2, 3];

//Adicionando números no início:
numeros.unshift(0);

//Adicionando números no meio:
numeros.splice(2, 0, 1.5); // vai adicionar 1.5 no 2, e o parâmetro 0 é porque não vamos substituir nada, apenas adicionar

//Adicionando números no final:
numeros.push(4);

numeros.indexOf(1.5); //retorna o índice de 1.5 que é 2, caso não existisse 1.5 no array ele retornaria -1
numeros.lastIndexOf(1.5); //nesse caso, se tiverem dois 1.5 no array ele retorna o index do último

numeros.includes(5); //retorna true caso tenha 5 em algum índice do array e false caso não tenha

let pessoas = [
    {id: 1, nome: 'Rebeca'},
    {id: 2, nome: 'Laura'}
];

//Encontrando um objeto dentro de um array utilizando o find
let objetoEncontrado = pessoas.find(function(pessoas){
    return pessoas.nome == 'Laura';
});

console.log(objetoEncontrado); //vai retornar o objeto que tem o nome 'Laura'

//Arrow function: usando esse método para encurtar a função anterior
objetoEncontrado = pessoas.find(pessoas => pessoas.nome === 'Laura');

//Removendo valores de um array:
numeros.pop(); //remove o último valor do array
numeros.shift(); //remove o primeiro valor do array
numeros.splice(1, 1); //remove um número no índice 1

console.log(numeros);

//Formas de esvaziar um Array:
numeros = []; //só remove esse array e deixa as referências normais
numeros.length = 0; //esvazia o array e as referências
numeros.splice(0, numeros.length); //esvazia o array e as referências

//Combinando e cortando Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//Combinando
let combinado = array1.concat(array2);
console.log(combinado);

//Cortando
const cortado = combinado.slice(0, 3); //tem como dois parâmetros o índice inicial e o final da parte que será mantida
console.log(cortado);

//Concatenando arrays com Spread
combinado = [...array1, ...array2, 7];

//ForEach
combinado.forEach((combinado, indice) => console.log('Índice ' + indice + ': '+ combinado));

//Combinando arrays com join e split
combinado = combinado.join('-'); //separa os elementos do array pelo traço

let frase = 'esse é um curso de javascript';
frase = frase.split(' '); //separa cada palavra em um elemento diferente, identificando através de espaços
frase = frase.join('-'); //separa as palavras em um elemento só separados por um traço

/*Recebendo dados de um usuário:
const idadeUser = prompt('Qual sua idade?');

if (idadeUser >= 18) console.log('Maior de idade');
    alert('Menor de idade');*/

