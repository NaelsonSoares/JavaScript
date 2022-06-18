function verificar(){
    let agora = new Date()
    let ano = agora.getFullYear()
    let niano = document.getElementById('txtano')
    let mensagem = document.getElementById('resultado')

    mensagem.innerHTML = 'Data atual ' + new Intl.DateTimeFormat('pt-br', {day: 'numeric', month: 'long', year: 'numeric'}).format(agora)

    if(niano.value.length == 0 || Number(niano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let idade = ano - Number(niano.value)
        let sexo = document.getElementsByName('sex')
        let genero = ''
        if(sexo[0].checked){
            genero = 'Masculino'
        }else if(sexo[1].checked){
            genero = 'Feminino'
        }
        mensagem.innerHTML += `<p>Sexo ${genero} com idade de ${idade} anos</p>`

        if(idade <= 10){
            mensagem.innerHTML += `<p>Ainda é uma criança!</p>`
        }else if(idade <= 15){
            mensagem.innerHTML += `<p>Já é um(a) adolecente!</p>`
        }else if(idade <= 25){
            mensagem.innerHTML += `<p>Um(a) jovem adulto(a)!</p>`
        }
        else if(idade < 65){
            mensagem.innerHTML += `<p>Adulto(a)!</p>`
        }
        else if(idade >= 65){
            mensagem.innerHTML += `<p>Um(a) idoso(a)!</p>`
        }
        
    }

        
}

/*let data = new Date()
console.log(new Intl.DateTimeFormat('pt-br', {day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'America/Sao_paulo', timeZoneName: 'long'}).format(data))*/