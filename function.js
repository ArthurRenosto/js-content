// DECLARANDO FUNCAO

console.log("------ FUNCAO ------")
 
funcaoNormal()

 /*
 o Hoisting move as funcoes para cima para serem executadas primeiro
 permitindo executar funções antes de serem declaradas
 coisa que nao acontece na funcao express 
 */
 
function funcaoNormal(){
	console.log("funcao normal")
}

funcaoNormal()

console.log("------ FUNCAO EXPRESSION ------")

const funcaoExpression = function() { // Associada a uma variavel
	console.log("funcao expression")
}

funcaoExpression()

let novaVariavel = funcaoExpression // associando a funcao a outra variavel

novaVariavel()

console.log("------ ARGUMENTOS ------")

function preco() {
	total = 0
	for (let valor of arguments) // arguments == argumetos da funcao
		total += valor // isso equivale a total = total + valor
	return total
}


console.log(preco(10, 20))

console.log("------ default ------")

function funcaoComValoresPadrao(valor1, valor2 = 5){
	return valor1 += valor2
}

console.log(funcaoComValoresPadrao(10))
