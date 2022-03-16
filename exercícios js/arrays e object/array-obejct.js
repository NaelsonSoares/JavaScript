const candidatos = [ {
    nome: 'Claudio',
    idade: 30
}, {
    nome: 'Miguel',
    idade: 28
}, {
    nome: 'Marta',
    idade: 32
}, {
    nome: 'Nicole',
    idade: 22
}]
        for (let i = 0; i < candidatos.length; i++){
        console.log(`O candidato é ${candidatos[i].nome} é tem ${candidatos[i].idade} anos`)
    }
    console.log()
        for (let propriedade in candidatos){
           console.log(candidatos[propriedade].nome)
            console.log(candidatos[propriedade].idade)
      }
    console.log()
            console.log(candidatos)//mostra todos os elementos
    console.log()
            console.log(candidatos[0])//mostra um indice dos elementos
    console.log()
            console.log(candidatos[2].nome)//mostra um indice de uma propriedade