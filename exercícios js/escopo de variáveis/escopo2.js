
let n = 'global'

function mostrarN(){
    let n1 = 'local'
    
    if(true){
        var n2 = 'n2 dentro de if com var'
    }
    console.log(n2)
    console.log('valor de n1 local: ' + n1)
    console.log('valor de n2 local: ' + n2)
    console.log('valor de n local: ' + n)
}
mostrarN()
console.log('valor de n no escopo global: ' + n)