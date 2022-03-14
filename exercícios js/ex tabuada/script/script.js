
const output = document.getElementById('output')
    
    function mostrarTabuada(){ 

        let numero = parseFloat(prompt('Digite um número'))
            let resultado = ''
            for(let tabuada = 0; tabuada <= 1000; tabuada++){
                resultado += (`${numero} x ${tabuada} = ${(tabuada * numero)}<br>`)
        }
        output.innerHTML = resultado
    }

    function limparTabuada(){
        output.innerHTML = ''
    }
            