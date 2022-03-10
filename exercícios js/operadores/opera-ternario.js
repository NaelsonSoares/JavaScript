var idade = 16
var paisPresentes = false
var bilheteComprado = true
const podeViajar = (idade >= 19 || paisPresentes) && bilheteComprado
console.log(`pode viajar: ${podeViajar}`)
/*if(!bilheteComprado){
    console.log("Não compou o bilhete")
} else {
    if(idade >= 18){
        console.log("É maior de idade, pode viajar")
    } else{
        console.log("Opa!! é menor de idade")
    }
}*/
var msgIdade = (idade >= 18) ? "É maior de idade" : "Menor de 18 anos"
console.log(msgIdade)
