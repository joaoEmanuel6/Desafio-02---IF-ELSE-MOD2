let nome = "joão"
let idade = 17
const humano = true
// Condição Menor ou Maior que 18
if (idade >= 18) {
    console.log('Bem vindo')
} else {
    console.log("vaza pivete")
}
// Condição Robô ou não.
if ((idade >= 18) && (humano == true) ) {
    console.log ('Parabéns, você não é um robô')
} else {
    console.log ("Você é um robô ou pior, você é menor de idade")
}
// Condição Mês
let mes = "Julho"

if (mes === "Dezembro" || mes === "Janeiro") {
    console.log ("Você faz anivesário em Dezembro ou Janeiro")
} else {
    console.log("você faz aniversário no mês de: " + mes)
}


