
let num = [10, 6, 4, 8, 5]
num.push(1) //inclui mais uma posição
num.sort((a, b) => a - b) //classifica em ordem crescente
//num.sort((a, b) => b - a) //classifica em ordem decrescente
console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`Os números da array são: ${num}`)
console.log(`O primero e o ultimo número da array são: ${num[0]}, ${num[4]}`)

let posicao = num.indexOf(2)
if(posicao == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor está na posição ${posicao}`)
}
