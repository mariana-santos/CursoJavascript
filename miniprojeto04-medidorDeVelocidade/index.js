/* Imita um radar: vai medir a velocidade e decidir quantos pontos receberão na carteira
Velocidade máxima = 70 km/h
A cada 5km acima da média será somado 1 ponto a carteira
Caso os pontos sejam maiores que 12 a carteira é suspensa 
Usar Math.floor() para arredondar os números decimais */

function medirVelocidade(velocidade){
    let pontos = 0;
    velocidade = Math.floor(velocidade); //arredonda

    if(velocidade <= 70)
        return 'Velocidade ok. Nenhum ponto acrescido'
    else
        pontos = (velocidade - 70) / 5;
        pontos = Math.floor(pontos);

        if(pontos >= 12)
            return 'Carteira suspensa. Pontos: '+ pontos;        
        return 'Pontos: '+ pontos;
}

const result = medirVelocidade(130);
console.log(result);