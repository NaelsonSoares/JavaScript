//String, number (int, float), booleam (true, false), null, undefined e Symbol são os tipos primitivos
let minhaVar = 'minha string'
let minhavar = 'minha "string" com aspas duplas'
let var2 = "minha 'string' e com aspas simples"
let idade = 49
let msg = 'eu possuo ' + idade + ' anos'//concatenar com aspas.
let msg_idade = `minha idade é ${idade} anos`// concatenar com crase

console.log(minhavar)
console.log(var2)
console.log(msg)
console.log(msg_idade)
console.log(typeof minhaVar, typeof msg, typeof idade, typeof msg_idade)// tipos de variáveis

const n1 = 40
const n2 = 22.6
console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`)
console.log(`O tipo de n2 é ${typeof n2} e o seu valor é ${n2}`)

var varteste = 
console.log(varteste)
console.log(typeof varteste)
varteste = 42
console.log(typeof varteste,  varteste)

var varteste = null
console.log(varteste)
console.log(typeof varteste) /*informa um Object quando o valor da variável for o null. Sendo isto uma falha já antiga que está deste o inicio e não pedondo mais ser corrigido.*/ 
varteste = 42
console.log(typeof varteste, varteste)