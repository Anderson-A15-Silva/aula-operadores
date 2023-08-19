
// Exercícios de Interpretação

/* 
Exercício 1
Resposta:
a. false
b. false
c. false
d. false
*/

/*
Exercício 2
Resposta:
Será impresso no console "primeiroNumerosegundoNumero", o erro está na ausência do Number que indicaria que o valor
será um número, já que o conteúdo das váriaveis digitadas pelo usuário (prompt) são consideradas Strings.
*/

/*
Exercício 3
Resposta:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/


// Exercícios de Escrita

/*
Exercício 1
Resposta:

const idadeUsuario = prompt("Qual é a sua idade?")
const idadeAmigo = prompt ("Qual é a idade de seu melhor amigo ou melhor amiga?")
const comparacaoIdade = Number(idadeUsuario) > Number(idadeAmigo)
const diferencaIdade = Number(idadeUsuario) - Number(idadeAmigo)
console.log("Sua idade é maior do que a de seu melhor amigo?", comparacaoIdade)
console.log(diferencaIdade)
*/

/*
Exercício 2
Resposta:
Notei que quando inserimos um número par o resultado é zero. Se o usuário inserir um número ímpar o "programa" 
separa o resto da divisão e exibe no console.

const numeroImpar = prompt("Digite um número ímpar:"")
const restoDivisao = Number(numeroImpar) % 2
console.log(restoDivisao)
*/

/*
Exercício 3
Resposta:

const idadeUsuario = prompt("Qual é a sua idade?")
const mesesAno = 12
const diasAno = 365
const horasAno = Number(diasAno) * 24

const idadeMeses = Number(idadeUsuario) * Number(mesesAno)
const idadeDias = Number(idadeUsuario) * Number(diasAno)
const idadeHoras = Number(idadeUsuario) * Number(horasAno)

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)
*/

/*
Exercício 4
Resposta:

const primeiroNumero = prompt("Digite um número:")
const segundoNumero = prompt("Digite outro número:")

const comparacaoMaior = Number(primeiroNumero) > Number(segundoNumero)
const comparacaoIgual = Number(primeiroNumero) == Number(segundoNumero)
const comparacaoDivisivel = Number(primeiroNumero) / Number(segundoNumero)
const comparacaoDivisivel2 = Number(segundoNumero) / Number(primeiroNumero)
const respostaDivisivel1 = comparacaoDivisivel !== NaN
const respostaDivisivel2 = comparacaoDivisivel2 !== NaN

console.log("O primeiro numero é maior que segundo?", comparacaoMaior)
console.log("O primeiro numero é igual ao segundo?", comparacaoIgual)
console.log("O primeiro numero é divisível pelo segundo?", respostaDivisivel1)
console.log("O segundo numero é divisível pelo primeiro?", respostaDivisivel2)
*/