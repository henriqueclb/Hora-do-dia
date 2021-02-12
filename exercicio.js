function carregar(){
var bomDia= document.getElementById("bd")
var msg= document.getElementById("msg")
var img= document.getElementById("img")
var data= new Date()
var hora= data.getHours()

msg.innerHTML= `Agora são ${hora} horas`
if(hora >=6 && hora < 12){
    img.src="manha.png"
    document.body.style.background="#87CEEB"
} else if(hora >=12 && hora <18){
    img.src="tarde.png"
    document.body.style.background="#00FF7F"
    bomDia.innerHTML="Boa Tarde"
}else{
    img.src="noite.png"
    document.body.style.background="#7B68EE"
    bomDia.innerHTML="Boa Noite"
}
}