
var numero = prompt('Digite um número')

var indice = 0
while(indice <= 10){
    indice++// é necessario fazer a variáel somar por ela mesmo para não entra no loop infinito.
    document.write(`${numero} x ${indice} = ${(indice * numero)}<br>`)
}
document.write('saiu do loop while<br>')

indice = 0
do{
    if(indice > 10){
        alert('indice maior que 10')
        break
    }    
    document.write(`${numero} x ${indice} = ${(indice * numero)}<br>`)
    indice++
}while(indice <= 10)
document.write('saiu do loop do while<br>')


for(let tabuada = 0; tabuada <= 10; tabuada++){
    if(tabuada === 5){
        continue        
    }
    document.write(`${numero} x ${tabuada} = ${(tabuada * numero)}<br>`)
}
document.write('saiu do loop for<br>')