function imprimir(){
    document.write("Hola Mundo desde javascript");
}

function encriptar(){
    var cadena = document.getElementById("cadena").value;
    var encriptada = "";
    for (var i = 0; i < cadena.length; i++) {
        encriptada += cadena.charCodeAt(i);
    }
    document.getElementById("resultado").value = encriptada;
}

imprimir();