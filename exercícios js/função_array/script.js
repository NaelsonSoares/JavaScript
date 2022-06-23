

//function adicionar(){
    let numero = document.querySelector('input#numero')
    let lista = document.querySelector('select#lista')
    let resultado = document.querySelector('div#resultado')
    let valores = []
    
        function inserirNum(n){
            if(Number(n) >= 1 && Number(n) <= 100){
                return true
            }else{
                return false
            }
        }

        function inLis(n, l){
            if(l.indexOf(Number(n)) != -1){
                return true
            }else{
                return false
            }
        }

        function adicionar(){
            if(inserirNum(numero.value) && !inLis(numero.value, valores)){
                valores.push(Number(numero.value))
                let item = document.createElement('option')
                item.text = `Valor ${numero.value} adicionado`
                lista.appendChild(item)
                resultado.innerHTML = ''
            }else{
                window.alert('Valor inválido ou já consta na lista!')
        }
                numero.value = ''
                numero.focus()
    }
        function finalizar(){
            if( valores.length == 0){
                window.alert('Adicione valores antes de finalizar')
            }else{
                let total = valores.length
                let maior = valores[0]
                let menor = valores[0]
                let soma = 0
                let media = 0
                for(let posicao in valores){
                    soma += valores[posicao]
                    if(valores[posicao] > maior)
                    maior = valores[posicao]
                    if(valores[posicao] < menor)
                    menor = valores[posicao]
                }
                media = soma / total
                resultado.innerHTML = ''
                resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
                resultado.innerHTML += `<p>O maior número informado é ${maior}</p>`
                resultado.innerHTML += `<p>O menor número informado é ${menor}</p>`
                resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
                resultado.innerHTML += `<p>A media dos valores informados é ${media}</p>`
            }
        }
    
//}
