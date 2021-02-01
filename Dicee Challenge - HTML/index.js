function mudaDado (dado){
    document.querySelector(".img1").src = `./images/dice${dado}.png`
}
function mudaDado2 (dado){
    document.querySelector(".img2").src = `./images/dice${dado}.png`
}

var randomNumber1 = Math.random()
randomNumber1 *= 6
var newNumber = Math.floor(randomNumber1) + 1
mudaDado(newNumber)

/* Não utilize esse método, podendo aplicar diretamente na função, não há necessidade de comparação
if (newNumber == 1) {
    mudaDado(1)
} else if (newNumber == 2) {
    mudaDado(2)
} else if (newNumber == 3) {
    mudaDado(3)
} else if (newNumber == 4) {
    mudaDado(4)
} else if (newNumber == 5) {
    mudaDado(5)
} else if (newNumber == 6) {
    mudaDado(6)
}*/

var randomNumber2 = Math.random()
randomNumber2 *= 6
var newNumber2 = Math.floor(randomNumber2) + 1
mudaDado2(newNumber2)

if (newNumber > newNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if ( newNumber < newNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}

/*
    Ainda se preferir pode incluir um botão para uma chamada de função e colocar os Math.random() dentro e não precisar 
    ficar dando refresh na página
    Retorno após concluir o curso para incluir o botão, afim de revisar o que eu aprendi...
*/
