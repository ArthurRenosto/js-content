// VARIAVEIS

var variavelUm = 10
let variavelDois = 10
const constanteUm = 10

// DADOS PRIMITIVOS

console.log('\n------ PRIMITIVOS ------\n')
let string = "texto" // str
let int = 1 // number
let float = 1.1 // number
let boolean = true // bool
let undef = undefined // undefined
let nulo = null // object

console.log(typeof nulo)

// DADOS POR REFERENCIA

console.log('\n------ OBJETO ------\n')
let object = {
	itemUm: 1,
	itemDois: "texto",
	itemTres: false
}

console.log(object)
console.log(object.itemDois)
object.itemDois = "novo_texto"
console.log(object.itemDois)

console.log('\n------ LISTA ------\n')

let array  = ["item 1", "item 2"]

console.log(array)
array.push("item 3") // Adiciona ao final
console.log(array)
array.unshift("item 0") // Adiciona ao inicio
console.log(array)

array[0] = "Novo item 0" // Subistitui com base no index
console.log(array)
array.pop() // Remove o ultimo item da lista
console.log(array)
array.shift() // Remove o primeiro item da lista
console.log(array)

console.log('\n------ FUNCAO ------\n')

function funcao(item1, item2) {
	return item1 + item2
}

console.log(funcao(1, 2))

// OPERADORES ARITMETICOS

console.log('\n------ ARITMETICOS ------\n')

let num1 = 10
let num2 = 10

console.log(
`${num1 + num2}
${num1 - num2}
${num1 * num2}
${num1 ** num2}
${num1 / num2}
${num1 % num2}`
)

console.log(++num1) // Incrementa antes de exibir
console.log(--num1)

console.log(num1++) // Incrementa após a execução
console.log(num1--)

num1 += 20
console.log(num1)

// OPERADORE DE COMPARACAO

console.log('\n------ COMPARACAO ------\n')

let numComparativo = 1
let strComparativa = "1"
console.log(
`${numComparativo > 0}
${numComparativo < 0}
${numComparativo >= 0}
${numComparativo <= 0}`
)

console.log(strComparativa === 1) // strict, verifica o tipo e valor
console.log(strComparativa !== 1) // verifica tipo ou valor

console.log(strComparativa == 1) // lose, verifica o valor
console.log(strComparativa != 1)

// OPERADORES TENARIOS

console.log('\n------ TENARIOS ------\n')

let numeroTenario = 10
let resultadoTenario = numeroTenario > 9 ? 'maior' : 'menor' 
console.log(resultadoTenario)

// OPERADORES LOGICOS

console.log('\n------ LOGICOS ------\n')

let booleanLogicoUm = true
let booleanLogicoDois = false

console.log(booleanLogicoUm && booleanLogicoDois) // AND
console.log(booleanLogicoUm || booleanLogicoDois) // OR
console.log(!booleanLogicoDois) // NOT
