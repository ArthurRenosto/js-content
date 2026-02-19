console.log("------ ADICIONANDO ------")
var array  = ["item 1", "item 2"]
console.log('array inicial:', array)

array.push("item 3") // Adiciona ao final
console.log(array)

array.unshift("item 0") // Adiciona ao inicio
console.log(array)

array.splice(4, 0, "item 5")
/*  primeiro valor do splice indica a partir de que ponto se quer adicionar
	segundo valor indica quantos item serão removidor da li para frente
	terceiro valor indica quais itens serão adicionados
*/
console.log(array)

console.log("\n------ SUBSTITUINDO ------")

var array  = ["item 1", "item 2"]
console.log('array inicial:', array)

array[0] = "Substituindo item 1" // Subistitui com base no index
console.log(array)

console.log("\n------ REMOVENDO ------")

var array  = ["item 1", "item 2"]
console.log('array inicial:', array)

array.pop() // Remove o ultimo item da lista
console.log(array)

var array  = ["item 1", "item 2"]

array.shift() // Remove o primeiro item da lista
console.log(array)

var array  = ["item 1", "item 2"]

array.splice(1, 1)
console.log(array)

console.log("\n------ LOCALIZANDO ------")

var array  = ["item 1", "item 2"]
console.log('array inicial:', array)

console.log(array.indexOf("item 2")) // Exibe o index do item no array

console.log(array.includes("item 2")) // Verifica se existe o valor no array

// Localizando array de referencia

let arrayDeObjetos = [
	{id: 1, nomeObjeto: "objeto 1"},
	{id: 2, nomeObjeto: "objeto 2"},
	{id: 3, nomeObjeto: "objeto 3"}
]
console.log(arrayDeObjetos)

console.log(arrayDeObjetos.find(function(numeroobj){
	return numeroobj.nomeObjeto == "objeto 2"
}))

console.log("\n------ ARROW ------")


let arrayDeArrows = [
	{id: 1, nomeObjeto: "objeto 1"},
	{id: 2, nomeObjeto: "objeto 2"},
	{id: 3, nomeObjeto: "objeto 3"}
]
console.log(arrayDeArrows)

console.log(arrayDeArrows.find(obj => obj.nomeObjeto == "objeto 1"))
console.log(arrayDeArrows.find(obj => obj.id == 1))

console.log("\n------ CONCATENANDO ------")

var array1  = ["item 1", "item 2"]
var array2  = ["item 3", "item 4"]

array1E2 = array1.concat(array2)
console.log(array1E2)

arrayMetade = array1E2.slice(1, 3)
console.log(arrayMetade)

console.log("\n------ ORGANIZANDO ------")

var array  = ["item 1", "item 2"]
console.log(array)

console.log(array.join(","))

var arrayAlfabeto = ["b", "d", "c", "a"]
console.log(arrayAlfabeto)

arrayAlfabeto.sort() // Organizado em ordem alfabetica
console.log(arrayAlfabeto)

console.log("\n------ FILTER ------")

var arrayNumeros = [1, 2, 3]

let semNegativo = arrayNumeros.every(function(valor){
	return valor >= 0 // verifica se possui numeros negativos e retorna um boolean
})

var arrayNumeros = [1, 2, 3]
console.log(arrayNumeros)

let arrayFilter = arrayNumeros.filter(valor => valor >= 2)

console.log(arrayFilter)
