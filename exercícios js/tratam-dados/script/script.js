var nome = window.prompt('Qual o seu nome')
window.alert('Seja bem vindo, ' + nome + '!')// concatenação
window.alert('Vamos brincar de tábuada? ' + nome + '!')
//  string para number-inteiros ou float
var n1 = Number.parseInt(window.prompt('digite um número'))
var n2 = Number.parseFloat(window.prompt('digite um segundo número'))
var n3 = parseInt(window.prompt('digite o terceiro número'))
var n4 = Number(window.prompt('digite o ultimo número'))
window.alert('Vamos ver qual foi o resultado?')
var s = n1 + n2 + n3 + n4//  number para string
window.alert('O resultado é ' + s)
var j = 'JavaScript'
window.alert('Que bom ' + nome + ' você está aprendendo ' + j + '.')