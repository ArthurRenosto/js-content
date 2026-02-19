let value = Number(prompt("digite o valor menor que 20"))

if (value < 20){
	document.getElementById("result").innerHTML = "Ok, realmente é menor do que 20"
} else if (value === 20){
	document.getElementById("result").innerHTML = "Deve ser menor que 20, não igual"
} else if (value > 20){
	document.getElementById("result").innerHTML = "Não deve ser maior e nem igual a 20"
} else {
	document.getElementById("result").innerHTML = "Opção Invalida"
}
