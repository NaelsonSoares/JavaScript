var diaSemana = 3

if(diaSemana === 0){
    console.log('Hoje é domingo')
}else if(diaSemana === 1){
    console.log('Hoje é segunda-feira')
}else if(diaSemana === 2){
    console.log('Hoje é terça-feira')
}else if(diaSemana === 3){
    console.log('Hoje é quarta-feira')
}else if(diaSemana === 4){
    console.log('Hoje é quinta-feira')
}else if(diaSemana === 5){
    console.log('Hoje é sexta-feira')
}else {
    console.log('Hoje é sábado')
}

var dia = ""
switch ( diaSemana ){
    case 0:
        dia = "domingo"
        break
    case 1:
        dia = "segunda-feira"
        break
    case 2:
        dia = "teça-feira"
        break
    case 3:
        dia = "quarta-feira"
        break
    case 4:
        dia = "quinta-feira"
        break
    case 5:
        dia = "sexta-feira"
        break
    case 6:
        dia = "sábado"
    default:
        dia = " -- "    
}
console.log(`o dia de hoje é ${dia}`)