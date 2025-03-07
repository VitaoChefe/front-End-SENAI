// alert("ola mundo")
//
// var test = prompt("digite qualque coisa")
//
// alet(test)

function testTexto() {
    document.getElementById("titulo").innerHTML += "boa tarde"
}

function testColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "red"
    titulo.style.fontSize = "50px"
}

function reset() {
    document.getElementById("titulo").innerHTML = "Bem-vindo ao Nosso Site de Motos"
}

function testInput() {
    document.getElementById("input").value = "tarde"
}

function testButton() {
    if (confirm("ok para limpar")){
        document.getElementById('inputEmail4').value = ''
        document.getElementById('inputPassword4').value = ''
        document.getElementById('inputAddress').value = ''
        document.getElementById('inputAddress2').value = ''
        document.getElementById('inputCity').value = ''
        document.getElementById('inputCep').value = ''
    }
}

function colorLabel() {
    document.getElementById("Label-email").style.color = "blue"
}

function colorLaber1() {
    document.getElementById("Label-senha").style.color = "blue"
}

function colorLaber2() {
    document.getElementById("Label-Endereço").style.color = "blue"
}

function colorLaber3() {
    document.getElementById("Label-numero").style.color = "blue"
}

function colorLaber4() {
    document.getElementById("Label-cidade").style.color = "blue"
}

function colorLaber5() {
    document.getElementById("Label-estado").style.color = "blue"
}

function colorLaber6() {
    document.getElementById("Label-cep").style.color = "blue"
}




