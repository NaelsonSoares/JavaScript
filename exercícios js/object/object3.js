

let amigo = {nome:'Lucas', idade:20, sexo:'M', altura:1.70, crescer(c=0){
    console.log('Cresceu')
    this.altura += c
     
}, data(d=0){
    console.log('Filiz aniversário')
    this.idade += d
}}

amigo.crescer(0.02)
console.log(`${amigo.nome} você cresceu agora sua altura é ${amigo.altura}`)
amigo.data(2)
console.log(`${amigo.nome} hoje você completa ${amigo.idade} anos`)
