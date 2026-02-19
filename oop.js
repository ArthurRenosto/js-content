/*
 Em programação orientada a objetos, temos um objeto que possui, metodos e propriedades
 metoods: o que ele pode fazer
 propriedades: o que ele tem
*/
console.log("------ OBEJTO ------")
let obj = {
	propriedadeUm: 1,
	propriedadeDois: "segunda propridade",
	propriedadeMultiplosValores: {
		valorUm: 1,
		valorDois: "segundo valor"
	},
	metodoobjeto: function(){
		console.log("executando funcao")
	}
}

console.log(obj)
console.log(obj.propriedadeUm)
console.log(obj.propriedadeMultiplosValores.valorDois)
obj.metodoobjeto()

console.log("------ FACTORY ------")
// obj -> agrupamento de variaveis
// factory -> agrupamento de obj
function factory(propriedadeUm, propriedadeDois) {
	let objeto = {
		primeiraPropriedade: propriedadeUm,
		segundaPropriedade: propriedadeDois,
		funcaoobjeto: function (){
			console.log("retornando:", this.primeiraPropriedade, "e", this.segundaPropriedade)
		}
	}
	return objeto
}

let empresa = factory("IXC Soft", "85.999.170/0001-84")
let empresa2 = f  actory("Magalu", "79.525.945/0001-87")
console.log(empresa)
console.log(empresa2)
empresa2.faturamento = "3b" // Adicionando propriedade ao objeto
console.log(empresa2)

console.log("------ CONSTRUCTOR ------")

function PrimeiroConstructor(primeiroparam, segundoparam){
	this.valor1 = primeiroparam;
	this.valor2 = segundoparam;
	this.construir = function(){
		return ("estou construindo")
	}
}

let pedreiro = new PrimeiroConstructor("Jorge", "40 anos")

console.log(pedreiro)
console.log(pedreiro.construir())
