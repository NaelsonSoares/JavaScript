/* os lógicos são:
! (exclamação) negação
&& (e-comercial duplo) 'e' (conjução)
|| (pipe duplo) 'ou' (disfunção) 
a ordem de precedência é !, &&, ||*/
/*
Para uma pessoa viajar para o exterior:
- Precisa ter 18 anos
ou
estar acompanhado dos pais
e
ter comprado o bilhete
*/
var idade = 17
var paisPresentes = true
var bilheteComprado = true
const podeViajar = (idade >= 19 || paisPresentes) && bilheteComprado
console.log(`pode viajar: ${podeViajar}`)
console.log( )
