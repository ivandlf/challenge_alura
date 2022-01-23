
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


var palabraEncriptada = []
var mensaje = [];


function encriptar(){
   
   var inputmensaje = document.getElementById("input-texto").value;
   var mensajeMinuscula = inputmensaje.toLowerCase();
   mensaje.push(mensajeMinuscula);
   var caracteresAceptados = /^[a-zA-Z]+$/

   if(inputmensaje.match(caracteresAceptados)){   
      for(i=0;i<mensaje.length;i++) {
         var nuevoMensaje = mensajeMinuscula.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
         console.log(nuevoMensaje);
         palabraEncriptada.push(nuevoMensaje);
         document.getElementById("msg").value = nuevoMensaje
         }  

         
         
   }else{
         alert("no se admiten numeros")
      }
      document.getElementById("input-texto").value = ""
}
function desencriptar(){

   var inputmensaje = document.getElementById("input-texto").value;
   mensaje.push(inputmensaje)
   
    for(i=0;i<mensaje.length;i++){
       var nuevoMensaje = inputmensaje.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
       console.log(nuevoMensaje);
       palabraEncriptada.push(nuevoMensaje);
       document.getElementById("msg").value = nuevoMensaje
   }
   document.getElementById("input-texto").value  = ""
}

function evitarRecarga(event){

   event.preventDefault();
   return false
}


function copiar() {

   var textoCopiado = document.getElementById("msg");
   textoCopiado.select();
   navigator.clipboard.writeText(textoCopiado.value);
   
 }