// Funcões - Metodo
CalcularMedia(5, 10); // Colocando/ Executando uma função

function CalcularMedia(num1, num2) {
    // Criando uma função
    // num1 = 5
    // num2 = 10
    console.log("A média será caulculada aqui!!");
    console.log((num1 + num2) / 2);
}


exibindoNome();



function exibindoNome() {
    var nome = prompt("Insira seu nome: ");
    return nome; 
}

// #14 Colocando em prática - Funções

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

var contador = 0;
do {
    var a = parseInt(prompt("Digite o valor de A: "));
    var b = parseInt(prompt("Digite o valor de B: "));
    var opcoes = parseInt(prompt("Qual função deseja fazer com os números inseridos?\n 1 - Somar\n 2 - Subtrair\n 3 - Multiplicar\n 4 - Dividir"));
    var resultadoOperacao;
    switch (opcoes) {
        case 1:
            resultadoOperacao = somar(a, b);
            break;
        case 2:
            resultadoOperacao = subtrair(a, b);
            break;
        case 3:
            resultadoOperacao = multiplicar(a , b);
            break;
        case 4:
            resultadoOperacao = dividir(a, b);
            break;    
        default:
            prompt("Insira uma das opções acima!!")
            break;
    }    
    var resultado = [];
    resultado[contador] = resultadoOperacao;
    contador++;
    console.log("O resultado da operação é: " + resultadoOperacao)
    
    var condition = prompt("Deseja fazer outra aplicação?\n 1 - Sim\n 2 - Não")

} while (condition == "1");


function exibirHistorico() {
    console.log("Histórico de resultados: ");

    for (let i = 0; i < resultado.length; i++) {
        console.log("resultado " + i + ":" + resultado[i])
        
    }
}

exibirHistorico();


