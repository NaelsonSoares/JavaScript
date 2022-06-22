
function parimp(n){
    if(n % 2 == 0){
        return `${n} é par`
    }else{
       return `${n} é impar`
    }
}
let res = parimp(10)
console.log(res)