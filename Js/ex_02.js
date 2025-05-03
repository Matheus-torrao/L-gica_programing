/*2 -Par ou Ímpar
Peça um número ao usuário e diga se ele é par ou ímpar.*/

const readline = require('readline-sync');

function parImpar(){
    let num1 = parseInt(readline.question("Digite o primeiro numero: "));

    if( num1 /2 || num1 %0){
        console.log("È Par")
    }else{
        console.log("È Impar")
    };
        
};

parImpar()