function comprobarLetra(){ 
    var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    var dni = document.getElementById("numDNI").value;
    var letra = document.getElementById("letraDNI").value;
    letra = letra.toUpperCase();

    if(dni < 1 || dni > 99999999){
        mensaje= "Debes indicar un número de DNI";
    }else{
        var letraCalculada = letras[dni% 23];
        if(letraCalculada != letra){
            mensaje= "La letra no coincide con el número de DNI proporcionado";
        }else{
            mensaje="La letra y el número coinciden correctamente";
        }
    }
document.getElementById("resultado").innerHTML = mensaje;
} 