

let numeros = [12, 6, 9, 5, 7, 65, 14]
    for(let pos = 0; pos < numeros.length; pos++){
        //numeros.sort((a, b) => a - b)
        console.log(`A posição com incremento ${pos} tem o numéro ${numeros[pos]}`)
    }

let valores = [1, 5, 8, 10, 21]
    for(let posi in valores){
        console.log(`A posição com in ${posi} tem o numéro ${valores[posi]}`)
    }