

const pessoa = {
    nome: 'Paulo',
    idade: 29,
    "email": 'paulo@contrato.com'
}
        console.log(pessoa)

        for (let propriedade in pessoa){
            console.log(propriedade) //mostra quais são as propriedades
            console.log(pessoa[propriedade])//mostra quais são as propriedades e seus valores
        }