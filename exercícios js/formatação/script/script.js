var nome = window.prompt('Qual o seu nome?')
var real = window.prompt('Digite um valor!')
document.write(`Olá, <strong>${nome}</strong>! seu nome tem ${nome.length} letras.<br/>`)
document.write(`${nome.toUpperCase()}, seu nome com todas as letras em maiúsculas.<br/>`)
document.write(`${nome.toLowerCase()}, seu nome com todas as letras em minúsculas.<br/>`)
document.write(`Acrescentamos um ponto no valor digitado ${real.toFixed(2)}.<br/>`)
document.write(`substituimos o ponto pela vírgula ${real.toFixed(2).replace('.',',')}.<br/>`)
