
function tabuada(){
    let numero = document.getElementById('numero')
    let resultado = document.getElementById('mostra')
    
    if(numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let num = Number(numero.value)
        let conta = 1
        resultado.innerHTML = ''
            while(conta <= 10){
                let item = document.createElement('option')
                item.text = `${num} x ${conta} = ${num * conta}`
                item.value = `resultado${conta}`
                resultado.appendChild(item)
                conta++
            }
    }
}