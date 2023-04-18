// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
//let texto = "Gato bendito seas"// "gato araña";

const vocales = ["a","e","i","o","u"];
const significado = ["ai","enter","imes","ober","ufat"];
const salidaEncriptada = document.getElementById("salida");
const textarea = document.getElementById("textarea");
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");


encriptar.onclick =(e) =>{
    let texto = textarea.value.toLowerCase();
    let mensaje = "";
    for(let i = 0; i<texto.length; i++){
        for(let j = 0; j<vocales.length; j++){
            if(texto[i] == vocales[j]){
                mensaje+=significado[j];
                validar = true;
                break;
            }else{validar = false;}
        }
        if(validar==false){mensaje+=texto[i];}
    }
    salidaEncriptada.innerHTML = mensaje;
    textarea.value = "";
}


desencriptar.onclick =(e) =>{
    let texto = salidaEncriptada.innerText;
    salidaEncriptada.innerHTML ="";
    let mensaje = "";
    for(let i = 0; i<significado.length;i++){
    
        for(let j = 0; j<texto.length; j++){
            mensaje = texto.replace(significado[i],vocales[i]);
            texto = mensaje;
        }
    }
    textarea.value = mensaje;
}




