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

console.log('\n------ IF/ELSE ------\n')

let numeroCondicional = 1

if (numeroCondicional > 1 ) {
	console.log("Maior que um")
} else if (numeroCondicional === 1) {
	console.log("O numero 1")
} else {
	console.log("Menor do que 1")
}

console.log('\n------ SWITCH/CASE ------\n')

let numeroSwich = 1

switch (numeroSwich){
	case 1:
		console.log("Caso Numero 1")
		break
	case 2:
		console.log("Caso Numero 2")
		break
	case 3:
		console.log("Caso Numero 3")
		break
	default:
		console.log("Nem um caso conhecido")
}

console.log('\n------ FOR ------\n')

for ( i = 0; i <= 10; i++){
	console.log("Numero" , i)
}

let arrayFor = ["item 1", "item 2", ]

for (let key in arrayFor){
	console.log(key, arrayFor[key])
}

for (let key of arrayFor){
	console.log(key)
}

console.log('\n------ WHILE ------\n')

let iDoWhile = 1

 while (iDoWhile <= 10){ // verifica antes de executar
 	console.log("Numero", iDoWhile)
 	iDoWhile++
 }

let iDo = 1
do { // executa antes de verificar
	console.log("Numero do Do", iDo)
	iDo++
} while (iDo <= 10)
