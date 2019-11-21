var valor = 19245;

function exibeValor() {

document.getElementById("demo1").innerHTML = "R$ " + valor +" arrecadados";
}

function atualizaValor() {

var acrescimo = document.getElementById('atualizadorValor').value;
valor += acrescimo;
}
