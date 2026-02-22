const URL = "https://dummyjson.com/products"

// Promise é um objeto que representa um valor que ainda nao existe
async function chamarAPI() { // diz que a função trabalha com promise
	const resposta = await fetch(URL); // diz para a promise terminar antes de continuar
	if (resposta.status === 200){
		const obj = await resposta.json(); // converte a resposta em json
		console.log(obj);
	}
}

chamarAPI()
