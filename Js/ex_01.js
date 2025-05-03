/* Soma Simples
Escreva um programa que solicite dois números inteiros ao usuário e exiba a soma desses dois números. */

// Modulo instalado para receber dados do usuario
const readline = require('readline-sync');

function somaSimples(num1, num2) {
    return num1 + num2;
}

const numero1 = parseInt(readline.question("Digite o primeiro numero: "));
const numero2 = parseInt(readline.question("Digite o segundo numero: "));

console.log("A soma é: " + somaSimples(numero1, numero2));
