function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 8
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //Bom Dia!
        img.src = 'foto-manha.png'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = 'foto-tarde.png'
    } else {
        //Boa Noite!
        img.src = 'foto-noite.png'
    }
}