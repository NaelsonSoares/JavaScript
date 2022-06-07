
function insert(num){
    let numeros = document.getElementById('calculo').innerHTML
       document.getElementById('calculo').innerHTML = numeros + num 
}
function clean(){
    document.getElementById('calculo').innerHTML = "";
}
function back(){
   let calculo = document.getElementById('calculo').innerHTML;
   document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length -1);
}
function calcular(){
    let calculo = document.getElementById('calculo').innerHTML;
    if(calculo){
        document.getElementById('calculo').innerHTML = eval(calculo);
    }   
}    