
function sum(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        return alert('Apenas números')
    }
    return n1 + n2
}
sum('a')