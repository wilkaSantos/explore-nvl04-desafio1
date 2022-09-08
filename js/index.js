/*
pedir dos números

com esses números, irá: somar, subtrair, multiplicar, dividir e mostrar o resto da divisão.
por ultimo = no total da soma irá informar se é ímpar ou par.
e se o números informados são iguais.
*/

const firstNumber  = Number(prompt(`Digite um número?`));
const secondNumber = Number(prompt(`Além do número ${firstNumber}, digite outro número?`));

const sum             = firstNumber + secondNumber;
const subtract        = firstNumber - secondNumber;
const multiplication  = firstNumber * secondNumber;
const divide          = (firstNumber / secondNumber).toFixed(2);
const rest            = firstNumber % secondNumber;

alert(`Com base nos números informados ${firstNumber} e ${secondNumber}, realizamos os seguintes cálculos:

A soma entre os números foi:  ${sum}.
A subtração entre os números foi:  ${subtract}.
A multiplicação entre os números foi:  ${multiplication}.
A divisão entre os números foi:  ${divide}.
O resto dessa divisão foi:  ${rest}. 
`);

const verification = sum % 2;

if (verification == 0) {
    alert(`O resultado da soma ${sum} é par!`);    
} else {
    alert(`O resultado da soma ${sum} é ímpar!`);
}


if (firstNumber === secondNumber) {
    alert(`Os números informados ${firstNumber} e ${secondNumber} são iguais.`);
} else {
    alert(`Os números informados ${firstNumber} e ${secondNumber} são diferentes.`);
}