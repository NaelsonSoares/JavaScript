/* function teste (cb){
    console.log ('funçaõ teste')
    cb()
}
teste (function (){
    console.log ('função anonima de callback')
}) */

/* function teste (cb){
    console.log ('funçaõ teste')
    console.log (cb)
    cb()
}
function fn (){
    console.log ('função anonima de callback')
}
teste(fn) */

/* const teste = function (cb){
    console.log ('funçaõ teste')
    console.log (cb)
    cb()
}
const fn = function (){
    console.log ('função anonima de callback')
}
fn() */

const teste = function (cb){
    console.log ('funçaõ teste')
    console.log (cb)
    cb('a função teste e referente a função cb')
}
const fn = function (param){
    console.log ('função anonima de callback')
    console.log (param)
}
teste (fn) // a função teste e referente a função cb