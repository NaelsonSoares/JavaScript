/* eventos com o DOM usando o mouse com alguns eventos do tipo:
- mouseenter
- mousemove
- mousedown
- mouseup
- mouseout
- click
*/

    function clicar(){
        let mouse = document.getElementById('mouse');
        mouse.innerHTML = 'Clicou!';
        mouse.style.background = 'red';
    }
    function entra(){
        let mouse = document.getElementById('mouse');
        mouse.innerHTML = 'Entrou!';
        mouse.style.background = 'black';
    }
    function sai(){
        let mouse = document.getElementById('mouse');
        mouse.innerHTML = 'Sai!';
        mouse.style.background = 'blue';
    }
/* eventos de soma */

    function somar(){
        let tn1 = document.getElementById('txtn1');
        let tn2 = document.getElementById('txtn2');
        let res = document.getElementById('res');
        let n1 = Number(tn1.value);
        let n2 = Number(tn2.value);
        let s = n1 + n2;
        res.innerHTML = `Resultado: ${n1} + ${n2} = ${s}`
    }

    /* condições */

    /* condições simples*/

    let velo = 81
    console.log(`A velocidade do carro é ${velo}km/h`)
    if(velo > 80){
        console.log(`Você utrapssou a velocidade permitida: MULTADO`)
    }
    console.log(`Dirija sempre com o cinto de seguraça. Boa viagem!`)

    /* condições composta*/

    let pais = 'Brasil'
    console.log(`moro no ${pais}`)
    if(pais == 'Brasil'){
        console.log(`Você é brasileiro!`)
    }
    else{
        console.log(`Você é estrageiro!`)
    }
    
 /* condições aninhadas*/
 let idade = 65
 console.log(`Sua idade é: ${idade} anos`)
 if(idade < 16){        
        console.log('Menor de idade')
        console.log('Você não vota!')
 }else if(idade < 18 || idade >= 65) {
        console.log('Seu voto é facutativo!')
 }else{
        console.log('Seu voto é obrigatório!')
 }

 let agora = new Date()
 let h = agora.getHours()
 let m = agora.getMinutes()
 let hm = [h, m].join(':')
 console.log(`Agora são exatamente ${hm}hs`)
    if(hm < ('12:00')){
        console.log('Bom dia!')
    } else if(hm <= ('18:00')){
        console.log('Boa tarde!')
    }else{
        console.log('Boa noite!')
    }

    /* condições multiplas - switch() - uso apenas de números inteiros e string */

    let dia = new Date()
    let diasem = dia.getDay()
    switch(diasem){
        case 0:
            console.log('Domingo')
                break
        case 1:
            console.log('Segunda-feira')
                break
        case 2:
            console.log('Terça-feira')
                break
        case 3:
            console.log('Quarta-feira')
                break
        case 4:
            console.log('Quinta-feira')
                break
        case 5:
            console.log('Sexta-feira')
                break
        case 6:
            console.log('Sábado')
                break
        default:
    }
    
    /* condições simples*/

    function calcular(){
        let txtv = document.getElementById('txtvel')
        let resu = document.getElementById('resul')
        let vel = Number(txtv.value)
        resu.innerHTML = `<p>Sua velocidade ataul é <strong>${vel}km/h</strong></p>`
        if(vel > 80){
            resu.innerHTML += `<p>Velocidade: <strong>${vel}km/h</strong> - MULTADO por exesso de velocidade</p>`
        }
        resu.innerHTML += `<p>Use o cinto de segurança</p>`
    }
    
    /* condições compostas*/
    function consultar(){
        let pais = document.getElementById('txtp')
        let orig = document.getElementById('origem')
        let nat = (pais.value)
        orig.innerHTML = `<p>Seu pais de origem é: <strong>${nat}</strong></p>`
        if(nat == 'Brasil'){
            orig.innerHTML += `<p>Você é: <strong>Brasileiro</strong></p>`
        }else{
            orig.innerHTML += `<p>Você é: <strong>Estrangeiro</strong></p>`
        } 
        orig.innerHTML += `<p>Volte Sempre!</p>`
    }

     /* condições aninhadas*/

     function conferir(){
        let vot = document.getElementById('voto')
        let anos = document.getElementById('resultado')
        let idade = Number(vot.value)
        anos.innerHTML = `<p>Sua idade é: <strong>${idade}  anos!</strong></p>`
        if(idade < 16){
            anos.innerHTML += `<p>Menor de idade</p>`
            anos.innerHTML += `<p>Você não vota!</p>`
        }else if(idade < 18 || idade >= 65) {
            anos.innerHTML += `<p>Seu voto é opcional!</p>`
        }else{
            anos.innerHTML += `<p>Seu voto é obrigatório!</p>`
        } 
        
    }
   