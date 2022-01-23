
var textoIngresado = document.getElementById("input-texto").value;

var textoEncriptado = textoIngresado.replace(/e/g,"enter");
var textoEncriptado = textoEncriptado.replace(/i/g,"imes");
var textoEncriptado = textoEncriptado.replace(/a/g,"ai");
var textoEncriptado = textoEncriptado.replace(/o/g,"ober");
var textoEncriptado = textoEncriptado.replace(/u/g,"ufat");

document.getElementById("msg").value = textoEncriptado;
document.getElementById("input-texto").value = '';


function desencriptar() {

    var textoIngresado = document.getElementById("input-texto").value;

    var textoDesencriptado = textoIngresado.replace(/enter/g, "e")
    var textoDesencriptado = textoDesencriptado.replace(/imes/g,"i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/g,"a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/g,"o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/g,"u");
  
    document.getElementById("msg").value = textoDesencriptado;
    document.getElementById("input-texto").value = '';
  
}

function copiar() {

  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  navigator.clipboard.writeText(textoCopiado.value);
  
}

function evitarRecarga(event){

  event.preventDefault();
  return false;

}
