// Botones
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var btnCopiar = document.querySelector(".btn-copiar");

var contenedorMuneco = document.querySelector(".contenedor-muneco");
var contenedorResultado = document.querySelector(".contenedor-resultado");

var textArea = document.querySelector(".text-area");
var resultado = document.querySelector(".resultado");

// funcion de encriptar
function encriptar(){
    actualizarPantalla();
    let texto = textArea.value;

    let result = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
        
        resultado.textContent = result;
}

// funcion de desencriptar
function desencriptar(){
    actualizarPantalla();
    let texto = textArea.value;

    let result = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    resultado.textContent = result;      
}


// funcion de copiar 
function copiar() {
    navigator.clipboard.writeText(copiarMensaje.innerHTML)
}

// Actualizar pantalla al encriptar
function actualizarPantalla(){
    contenedorMuneco.style.display="none";
    contenedorResultado.style.display="block";
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar; 
btnCopiar.onclick = copiar;






