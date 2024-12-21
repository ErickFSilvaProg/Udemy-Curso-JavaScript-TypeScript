const nome = 'Erick';
const sobrenome = 'Ferreira da Silva';
let idade = '38';
let peso = '82';
let altura = '1.75';
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(
    `${nome} ${sobrenome} nascido em ${anoNascimento} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e o seu IMC é ${imc}`
);

