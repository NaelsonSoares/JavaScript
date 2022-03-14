
let n = 'global'

function mostrarN(){
    let n = 'local'
    console.log('valor de n local: ' + n)
}
mostrarN()
console.log('valor de n no escopo global: ' + n)
