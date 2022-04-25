function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'foto-manha.png'
        document.body.style.background = '#9a8163'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#9c7263'
    } else {
        //BOA NOITE!
        img.src = 'foto-noite.png'
        document.body.style.background = '#3b2e4a'
    }
}