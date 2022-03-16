//criar um array com números randomicos não repetidos
function genereteRandomInteger(max){
    return parseInt(Math.random() * max)
}

    let arr = []
    let i = 0
    while (arr.length <= 20){
        i++
    let randomNumber = genereteRandomInteger(30)

    if (arr.indexOf(randomNumber) < 0) {// estamos garantino que não teremos um loop infinito
        arr.push(randomNumber)// pois estamos utilizando um push (assim retorna a let arr)
    } else {//saber quais foram os números repetidos
        console.log(randomNumber, 'Já existe no arr')
    }
}
        console.log(arr)
        console.log('o loop foi executado ', i, ' vezes')