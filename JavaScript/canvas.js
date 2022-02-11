var pantalla=document.querySelector("#canvasBody");
var pincel=pantalla.getContext("2d");

function gameBoard(){
pincel.fillStyle="black";
pincel.lineWidth=5; 

pincel.beginPath(); //base of the tree
pincel.moveTo(50,360);
pincel.lineTo(170,360);
pincel.lineTo(110,345);
pincel.closePath();
pincel.fill();

pincel.beginPath(); //tree
pincel.moveTo(110,345);
pincel.lineTo(110,40);
pincel.lineTo(300,40);
pincel.lineTo(300,65)
pincel.stroke(); 
}   

function dibujarHorca(errores){
pincel.fillStyle="black";
pincel.lineWidth=3;

if (errores>=1) {
pincel.beginPath();//Head
pincel.arc(300,90,25,0,Math.PI*2,true); 
pincel.stroke();
}

if(errores>=2){
pincel.beginPath();//body
pincel.moveTo(300,115);//up
pincel.lineTo(300,200);//down
pincel.stroke();
}

if (errores>=3){
pincel.lineTo(250,260);//up
pincel.lineTo(300,200);//right foot
pincel.stroke();
}

if (errores>=4){
pincel.lineTo(350,260);//up
pincel.lineTo(300,200);//left foot
pincel.stroke();
}

if (errores>=5){
pincel.moveTo(300,160);//up
pincel.lineTo(250,110);//right hand
pincel.stroke();
}

if (errores>=6){
pincel.lineTo(300,160);//up
pincel.lineTo(350,110);//left hand
pincel.stroke(); 
}
}

function dibujarLetraPalabra(tecla,posicion){
    pincel.font="25pt comic";
    pincel.fillStyle = "black";
    pincel.fillText(tecla, (180+posicion*40), 350);
}

function dibujarGanaste(){
pincel.font="30pt comic";
pincel.fillStyle="green";
pincel.fillText("you won!!!",365,100);
againPlay();
}

function dibujarPerdiste(){
pincel.font="30pt comic";
pincel.fillStyle="red";
pincel.fillText("Game Over",365,100); 
}

function dibujarPalabraSecreta(palabra){
palabraA=palabra.join("");
pincel.font="12pt comic";
pincel.fillStyle="blue";
pincel.fillText("Word: "+palabraA,365,150);  
}

function dibujarletasIncorrectas(letra, errores){
pincel.font="20pt comic";
pincel.fillStyle = "red";
pincel.fillText(letra, (300+errores*25), 200);
}

function againPlay(){
    pincel.font="12pt comic";
    pincel.fillStyle="blue";
    pincel.fillText("double click PLAY to play again ",195,15);  
}

gameBoard();