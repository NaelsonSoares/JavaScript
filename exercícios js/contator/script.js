
//contador numérico
function contar (){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let conta = document.getElementById('conta')
        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert('[ERRO] Falta preencher dados')
        }else{
            conta.innerHTML = 'Contando: '
            let ini = Number(inicio.value)
            let fi = Number(fim.value)
            let pas = Number(passo.value)

            if(pas <= 0){
                window.alert('Passo inválido! considerando Passo 1')
                pas = 1
            }

            if(ini < fi){
                for(let cont = ini; cont <= fi; cont += pas){
                    conta.innerHTML += ` ${cont} \u{1F449} `
                }
            } else {
                for(let cont = ini; cont >= fi; cont -= pas){
                    conta.innerHTML += ` ${cont} \u{1F449} `
                }
            }
        } 
                conta.innerHTML += `\u{1F3C1}`
}

function limpar(){
    conta.innerHTML = ''
}

