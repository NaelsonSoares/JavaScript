function alteraArray (a){
    a.push ('adicionado')
}

let arr = ['a']
    console.log(arr)
alteraArray(arr)
    console.log(arr)
        console.log()
function alteraPrimitivo (p) { //mensagem
    p += ' adicionada'
    console.log(' dentro da função a', p)
}

let msg = 'mensagem'
    console.log(msg)
alteraPrimitivo(msg)
    console.log(msg)