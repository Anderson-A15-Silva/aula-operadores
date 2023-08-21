
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
const comparacaoDivisivel = Number(primeiroNumero) % Number(segundoNumero)
const comparacaoDivisivel2 = Number(segundoNumero) % Number(primeiroNumero)
const respostaDivisivel1 = comparacaoDivisivel === 0
const respostaDivisivel2 = comparacaoDivisivel2 === 0

console.log("O primeiro numero é maior que segundo?", comparacaoMaior)
console.log("O primeiro numero é igual ao segundo?", comparacaoIgual)
console.log("O primeiro numero é divisível pelo segundo?", respostaDivisivel1)
console.log("O segundo numero é divisível pelo primeiro?", respostaDivisivel2)
*/

/*
Desafio 1
Resposta:

const grausFahrenheit = 77
const medidaKelvin = "K"
const conversao = (grausFahrenheit - 32) * (5/9) + 273.15
console.log(conversao, medidaKelvin)

const grausCelcius = 60
const medidaFahrenheit = "F"
const conversao2 = grausCelcius * (9/5) + 32
console.log(conversao2, medidaFahrenheit)

const grausCelcius2 = 30
const medidaFahrenheit2 = "F"
const conversao3 = grausCelcius2 * (9/5) + 32
console.log(conversao3, medidaFahrenheit2)

const grausCelcius3 = 60
const medidaFahrenheit3 = "F"
const conversao4 = grausCelcius3 * (9/5) + 32
const resultado = (conversao4 - 32) * (5/9) + 273.15
console.log(resultado, medidaFahrenheit3)

const grausCelcius4 = prompt("Insira a quantidade de graus Celsius que você quer converter:")
const conversao5 = grausCelcius4 * (9/5) + 32
console.log(conversao5, "F")
const resultado2 = (conversao5 - 32) * (5/9) + 273.15
console.log(resultado2, "K")
*/

/*
Desafio 2
Resposta:

const valorQuilowatthora = 0.05
const consumoQuilowatthora = 280
const resultado = valorQuilowatthora * consumoQuilowatthora
console.log(resultado)

const valorQuilowatthora = 0.05
const consumoQuilowatthora = 280
const resultado = valorQuilowatthora * consumoQuilowatthora
console.log(resultado)
const desconto = Number(resultado) * 0.15
console.log(desconto)
*/

/*
Desafio 3
Resposta (Incompleta)

const libra = 20
const conversaoLibra = libra * 0,453592
console.log("20lb equivalem a", Number(conversaoLibra), "kg")
*/
