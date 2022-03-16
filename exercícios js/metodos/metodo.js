
const produto = {
    nome: 'caneta',
    qtd: 10,
        comprar: function (n){
            console.log(this)
            if (n > this.qtd) {
                return 'quantidade não disponivel'
            }
            this.qtd -= n
        },
                teste1: function (){
                    console.log('teste 1')
                    console.log(this)//nesta sintaxe o this mostra todos os elementos da function
                },
                teste2: () => {
                    console.log('teste 2')
                    console.log(this)//nesta sintaxe o this mostra function vazia
                }
}
    produto.comprar(3)
    //console.log(produto)

    produto.comprar(10)
    //console.log(produto)

    produto.teste1()
    produto.teste2()