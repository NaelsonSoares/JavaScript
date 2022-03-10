var idade = 20
var paisPresentes = true
var bilheteComprado = true
if(!bilheteComprado){
    console.log("Não compou o bilhete")
} else {
    if(idade >= 18){
        console.log("É maior de idade, pode viajar")
    } else{
        console.log("Opa!! é menor de idade")
    }
}
console.log( )
var n1 = 4
var n2 = 8
var n3 = 9
var n4 = 7
const media = (n1 + n2 + n3 + n4) / 4
console.log(`media: ${media}`)

if(n1 === 0 || n2 === 0){
    console.log("Reprovado")
} else if(media < 7){
    console.log("Recuperação")
} else{
    console.log("Aprovado")
}
    console.log("Saiu do bloco if")