

function fatorial(n){
    let fat = 1
    for(let res = n; res > 1; res--){
    fat *= res
    }
    return `O fatorial de ${n} é ${fat}`
}

console.log(fatorial(5))