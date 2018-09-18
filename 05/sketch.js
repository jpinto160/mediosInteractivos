//variables
var minu = 0;
var minpos;
var segu = 0;
var hrrec = 0;
var hr = 0;
var hrpos;


function setup() {
  createCanvas(600, 400);
  background(220);
  //cambio de modo de radianes a grados
  angleMode(DEGREES);
}

function draw() {
  //fondo con color
  fill(32, 201, 226);
  rect(0, 0, 800, 400);
  
  //segu=second();
  //minu=minute();
  //hr=hour();
  if (hr>=17){
   //rectangulo que va "creciendo" según las horas
  fill(6, 38, 65);
  rect(600 - hrrec, 0, 0 + hrrec, 400);
  }
  //escala para adecuar el movimiento del cuadrado
  hrrec = map(hr, 0, 23, 0, 600);
	//operación que simula el aumento en segundos
  segu = segu + 1;
	//condición para aumento de los minutos y reinicio del segundero
  if (segu == 59) {
    minu = minu + 1;
    segu = 0;
  }
  //condición para aumento de la hora y el reinicio de los minutos
  if (minu == 59) {
    hr = hr + 1;
    minu = 0;
  }
  //condición para el aumento el reinicio de la hora 
  if (hr+12 == 24) {
    hr = 0;
  }

	//ambientación del escenario 
  fill(0, 255, 0);
  noStroke();
  arc(300, 400, 1000, 400, PI, HALF_PI);
  stroke(1);
  fill(221, 103, 31);
  rect(200, 250, 200, 100);
  fill(136, 73, 36);
  rect(220, 290, 40, 60);
  fill(164, 73, 19);
  rect(300, 280, 90, 60);
  fill(110, 35, 35);
  triangle(180, 250, 420, 250, 300, 150);
  fill(0, 255, 0);

  rect(340, 300, 40, 30);
  line(360, 300, 360, 330);
  line(340, 315, 380, 315);
	
  //sección para el reloj de adorno en el interior de la casa
  //sección para la hora
  push();
  translate(320, 290);
  rotate(hrpos);
  fill(200, 230, 203);
  ellipse(0, 0, 10, 10);
  stroke(0);
  line(0, 0, 0, -5);
  hrpos = map(hr, 0, 12, 0, 360);
  pop();
  //sección para los minutos
  push();
  translate(320, 290);
  rotate(minpos);
  fill(200, 230, 203);
  stroke(0);
  line(0, 0, 0, -5);
  minpos = map(minu, 0, 59, 0, 360);
  pop();
	//más adornos
  fill(14, 239, 210, 100);
  rect(300, 280, 90, 60);
  line(345, 280, 345, 340);
  line(300, 310, 390, 310);
  //sol que avanza con el tiempo
  push(); 
  noStroke();
  
  fill(255, 246, 0);
  ellipse(470-hrrec,60,80,80);
  fill(255);
  //nube #1
  ellipse(100-hrrec,50,50,40);
  ellipse(130-hrrec,50,50,40);
  ellipse(160-hrrec,50,50,40);
  //nube #2
  ellipse(300-hrrec,100,50,40);
  ellipse(330-hrrec,100,50,40);
  ellipse(360-hrrec,100,60,50);
  //nube #3
  ellipse(500-hrrec,40,50,40);
  ellipse(530-hrrec,40,50,40);
  ellipse(560-hrrec,40,60,50);
  //nube #4
  ellipse(550-hrrec,120,50,40);
  ellipse(580-hrrec,120,50,40);
  ellipse(610-hrrec,120,60,50);
  //nube #5
    ellipse(680-hrrec,130,50,40);
  ellipse(710-hrrec,130,50,40);
  ellipse(740-hrrec,130,60,50);
  
  pop();
  if (hr>=17){

  //sección para "filtro" para oscurecer el escenario
  //tiene el mismo manejo del movimiento que el rectangulo de fondo
  push();
  noStroke();
  fill(6, 38, 65, 120);
  rect(600 - hrrec, 0, 0 + hrrec, 400);
  fill(131, 250, 244,255);
  noStroke();
  //ambientación luna+estrellas
  ellipse(660 - hrrec, 60, 80, 80);
  ellipse(750 - hrrec, 120, 10, 10);
  ellipse(900 - hrrec, 40, 10, 10);
  ellipse(950 - hrrec, 90, 10, 10);
  pop();
  }
  
  fill(255);
  text(hr + ':' + minu + ':' + segu, 400, 400)

}
