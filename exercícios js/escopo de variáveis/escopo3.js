
function fExterna(){
    let  n = 'n local na função externa'

    function fInterna(){
        let n = 'n local na função interna'
        console.log(n)
    }
    fInterna()
    console.log(n)
}
fExterna()