const lampada=document.getElementById('txtlampada')
const lamponoff=document.getElementById('butOnoff')


function isbroken(){
    return lampada.src.indexOf('quebrada') > -1
}

function turnOn(){
    if(!isbroken()){
        lampada.src="./img/ligada.jpg"
    }
}


function turnoff(){
    if(!isbroken()){
        lampada.src="./img/desligada.jpg"
        lamponoff.value='ligar'
    }
}

function turnonoff() {
    if(lamponoff.value === "ligar" ){
        turnOn();
        lamponoff.value = "desligar"
    }else{
        turnoff();
        lamponoff.value="ligar"
    }

}    

function lampbreak(){
    lampada.src="./img/quebrada.jpg"
}


lamponoff.addEventListener('click', turnonoff)
lampada.addEventListener('dblclick', lampbreak)
lampada.addEventListener('mouseover', turnOn)
lampada.addEventListener('mouseleave', turnoff)

