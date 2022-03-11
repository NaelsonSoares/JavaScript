var numero = prompt('Digite um número')

var indice = 11
while(indice <= 10){
    document.write(`${numero} x ${indice} = ${(indice * numero)}<br>`)
    indice++
}
document.write('saiu do loop while<br>')

do{// serve para para o loop while quando a variável for maior que o elemento
    document.write(`${numero} x ${indice} = ${(indice * numero)}<br>`)
    indice++
}while(indice <= 10)
document.write('saiu do loop do while<br>')


for(let tabuada = 0; tabuada <= 10; tabuada++){
    document.write(`${numero} x ${tabuada} = ${(tabuada * numero)}<br>`)
}
document.write('saiu do loop for<br>')