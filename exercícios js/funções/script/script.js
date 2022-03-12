

function bom(){
    document.write('Bom dia em declaração de function<br>')
}
bom()

const boat = function(){
    document.write('Boa tarde em function expression<br>')
}
boat()

const boan = () => {
    document.write('Boa noite em arrow function<br>')
}
boan()

//retorno de valores
function diasemana(){
    return new Date(). getDay()
}
document.write(diasemana())
document.write(' por que hoje é sábado<br>')

//recebendo parãmetros
function somar(n1 = 0, n2 = 0){
    //let n1 = n1 || 0
    //let n2 = n2 || 0
    return n1 + n2
}
let soma = somar(3, 5, 8)// para javascript não faz diferença, vai somr apenas oe primeiros
document.write(soma)
document.write('<br>')
document.write(somar(10))
document.write('<br>')
document.write(somar())

