/**
 * Não podemos criar constantes com palavras reservadas;
 * Constantes precisam ter nomes significativos;
 * Constantes não podem iniciar com um número;
 * Constantes não podem conter espaços ou traços;
 * Utilizamos o camelCase nas constantes;
 * Constantes são case-sensitive;
 * Não pode modificar o valor de uma constante;
 * Declaramos constantes com const;
 * Não podemos inicializar uma constante sem declarar seu valor;
 */


const nome = 'João';
let sobrenome;
sobrenome = "Mendes"

console.log(nome, sobrenome);


const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
let resultadoTriplicadoAlterado = resultadoTriplicado + '5';

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
console.log(resultadoTriplicadoAlterado);

console.log(typeof resultadoTriplicado);
console.log(typeof resultadoTriplicadoAlterado);