
let num1 =  5;
let num2 = 10;
let num3 = 15.5;
let pessoa = "Erick";

/**
 * - Operadores aritméticos em ordem de precedência:
 * 
 * Parenteses: ()
 * Potenciação: **
 * Multiplicação: *
 * Divisão: /
 * Módulo: %
 * Adição/Concatenação: +
 * Subtração: -
*/

// Potencialização:
console.log(num2 ** num1);

// Multiplicação:
console.log((num2-num1) * num3);

// Divisão:
console.log(num2 / num1);

// Módulo
console.log(num3 % num1);

// Adição:
console.log(num1 + num2);

// Subtração:
console.log(num1 - num2);


/**
 * - Operadores de incremento e decremento
 * 
 * Incremento: ++
 * Decremento: --
*/

// Incremento:
console.log("Valor original: " + num1);
num1++;
console.log(num1);

// Decremento:
console.log("Valor original: " + num2);
num2--;
console.log(num2);

let contador = 10;
contador += num1;
console.log(contador);

let contador2 = 20;
contador2 -= num3;
console.log(contador2);