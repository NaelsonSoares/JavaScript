function visualizar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    //let foto = document.getElementById('foto')
    let agora = new Date()
    //let h = 13
    let h = agora.getHours()
    let m = agora.getMinutes()
    let hm = [h, m].join(':')
 msg.innerHTML = `Agora são <strong>${hm}hs</strong>`
 if (h < 12){
    msg.innerHTML += ` Bom dia!`
    img.src= 'imagens/manha.png'
 }else if(h >= 12 && h < 18){
    msg.innerHTML += ` Boa Tarde!`
    img.src= 'imagens/tarde.png'
    //foto.src = 'imagens/fototarde.jpg'
 }else{
    msg.innerHTML += ' Boa noite!'
    img.src= 'imagens/noite.png'
    
 }
}