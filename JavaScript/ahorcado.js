var botonIniciarJuego = document.querySelector("#play");
var listaPalabrasSecretas=["FILE","BUG","DOM","GIT","SKIN","TAGS","REBOOT","DRIVERS","JOYSTICK"];

botonIniciarJuego.addEventListener("click",function(event){
    event.preventDefault();
    window.scrollTo(0,320);           
    var palabra = seleccionarPalabraSecreta(listaPalabrasSecretas);
    crearGuiones(palabra);
    var aciertos=0;
    var intentos=0;
    verificarTecla(palabra,aciertos,intentos);

    botonIniciarJuego.addEventListener("dblclick",function (event) {
        event.preventDefault();
        location.reload();
    });
});

function seleccionarPalabraSecreta(lista){
    var numeroAleatorio=Math.floor(Math.random()*lista.length);
    var palabraAleatoria=lista[numeroAleatorio];
    var palabraSecreta=palabraAleatoria.split("");  
    return palabraSecreta;
    }

function validarPalabra(palabra) {
    var exito  = true;
    var palabra = palabra.toUpperCase();
    for (let i = 0; i < palabra.length; i++) {
        var codigo = palabra[i].charCodeAt(0);
        if( !(codigo > 64 && codigo < 91) || palabra.trim().length == 0) {
            exito = false;
            break;
        }
    }
    return exito;
}

function crearGuiones(palabra){
    for(i=0; i<palabra.length;i++){
        pincel.beginPath();
        pincel.moveTo ((180+i*40),360); 
        pincel.lineTo((210+i*40),360);
        pincel.closePath();
        pincel.stroke();
    }                               
}

function verificarTecla(palabra, aciertos, intentos){
document.addEventListener('keydown', (event) => {
    
    var teclaPresionada = event.key;
    var valido=validarPalabra(teclaPresionada); 
   
    if(valido){
        teclaValida=teclaPresionada.toUpperCase(); 
        intentos=intentos+1;
            for(i=0; i<palabra.length; i++){         
                if (palabra[i]==teclaValida){
                dibujarLetraPalabra(teclaValida,i);
                aciertos=aciertos+1;
                var exito=true;
                     if (aciertos==palabra.length){
                        dibujarGanaste();
                        document.removeEventListener('keydown', (event));
                    }
                }
            }
            if (exito){
                letrasCorrectas.push(teclaValida)
            }
            var errores=intentos-aciertos;
            dibujarHorca(errores);
            dibujarletasIncorrectas(teclaValida,errores);
                if ((errores)>5){
                dibujarPerdiste();
                dibujarPalabraSecreta(palabra);
                againPlay();
                }     
}})}