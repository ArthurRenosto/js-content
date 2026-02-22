function calculamento() {

	let num1 = Number(document.getElementById('num-one').value)
	let num2 = Number(document.getElementById('num-two').value)
	
	let resultado = 0

	if (document.getElementById("box1").checked){
		resultado = num2 + num2
	} else if (document.getElementById("box2").checked){
			resultado = num2 - num2
	} else if (document.getElementById("box3").checked){
				resultado = num2 * num2
	} else if (document.getElementById("box4").checked){
				resultado = num2 / num2
	} else
		console.log(1)
	document.getElementById("resultArea").innerHTML = String(resultado)
		
	
	
}
