/*Pegar o nome da pessoa que tá tentando entrar e perguntar quem o convidou através do input
Criar um botão em que, ao seu clique entre em uma função que verifica se o nome da pessoa
está realmente na lista de convidados e se ela realmente foi convidada por quem disse que foi

Além do texto "Pesquisando..." na tela que dependendo do resultado vai mudar para:
"Você pode entrar"! ou "Você não pode entrar!"
*/

//Foram criadas três arrays de pessoas que convidam os elementos do array
const convidadosTiago = ['Jhonatan', 'Larissa', 'Beatriz', 'Eduarda', 'Jaqueline', 'Pedro'];
const convidadosAlice = ['Miguel', 'Jorge', 'Marcia', 'Lucas', 'Filipe', 'Maíra', 'Danilo'];
const convidadosMaria = ['João', 'Vitor', 'Cauê', 'Fernando', 'Yara'];

//o nome da função que foi colocada no onclick do botão, toda vez que for clicado esse código vai ser rodado
function verificar(){
    let convidado = document.getElementById("convidado").value; //essa função pega o valor que o usuário digitou no input de id "convidado" e o mesmo ocorre com os outros
    let convidou = document.getElementById('convidou').value;
    let resultado = document.getElementById('texto');

    switch(convidou){
        //Esse switch vai verificar primeiramente se quem convidou realmente existe no código, tem uma opção para cada caso e se não existir ele cai no erro do default
        case 'Tiago':
            if (convidadosTiago.includes(convidado)) {
                //Caso o array do Tiago tenha o nome do convidado a mensagem vai ser de sucesso
                resultado.innerText = 'Você pode entrar!'; //Muda o texto de "Verificando..." para "Você pode entrar"
                resultado.style.color = 'rgba(0, 146, 0, 1)' //Muda a cor desse texto para verde indicando sucesso
            }
    
            else {
                //Caso o array do Tiago não tenha o nome do convidado, ele vai fazer o mesmo mas indicando fracasso.
                resultado.innerText = 'Você não pode entrar!';
                resultado.style.color = '#ff0000';}
            break;
        //O mesmo processo se repete para os três nomes
        case 'Alice':
            if (convidadosAlice.includes(convidado)) {
                resultado.innerText = 'Você pode entrar!';
                resultado.style.color = 'rgba(0, 146, 0, 1)'
            }
                else {resultado.innerText = 'Você não pode entrar!';
                resultado.style.color = '#ff0000';}
            break;
        case 'Maria':
            if (convidadosMaria.includes(convidado)) {
                resultado.innerText = 'Você pode entrar!';
                resultado.style.color = 'rgba(0, 146, 0, 1)'
            }
            else {resultado.innerText = 'Você não pode entrar!';
                resultado.style.color = '#ff0000';}
            break;
        //O default é o caso em que a pessoa que convidou indicada não existe
        default:
            resultado.innerText = 'Você não pode entrar!';
            resultado.style.color = '#ff0000';
    }
}
