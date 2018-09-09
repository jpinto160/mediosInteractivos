
//definición de variables requeridas en el proyecto
var movX = 0;
var movY = 0;
var rot = 1;
var velt = 0;
var refY = 0;
var sto = 1;
var poses = 0;
var pal = 321;
var stopal = 1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
}

function draw() {
	//inicio de el dibujado
  //creación de condición
  //antes del frame 50 se reproduce la primera parte de la "historia"
  if (frameCount < 50) {
    //color del fondo
    background(2, 20, 55);
    //luna
    //arco a a manera de luna con iluminación sin bordes
    noStroke();
    //color amarrillo con transpariencia
    fill(243, 250, 52, 100);
    arc(321*width/321, 207*height/207, 240*width/321, 240*height/207, PI, -HALF_PI);
    //parte central de la luna
    //arco central de luna 
    //color al 100% de opacidad(transpariencia)
    fill(243, 250, 52);
    arc(321*width/321, 207*height/207, 200*width/321, 200*height/207, PI, -HALF_PI);
    //arco de decoración con color con transparencia
    fill(145, 133, 0, 100);
    ellipse(295*width/321, 155*height/207, 30*width/321, 30*height/207);
    //estrellas
    //variables para modificar la transpariencia de los circulos
    //modificicación aleatoria de los colores 
    //tres tipos de modificación para la transparencia
    //creación modificación tipo 1
    var a = random(100, 255);
    //creación modificación tipo 2
    var aa = random(100, 150);
    //creación modificación tipo 3
    var aaa = random(80, 100);
    //modificación tipo 1 
    //cambio de transpariencia a circulos de  a 254 como cantidades posibles
    fill(243, 250, 52, a);
    ellipse(110*width/321, 70*height/207, 4*width/321, 4*height/207);
    ellipse(240*width/321, 55*height/207, 5*width/321, 5*height/207);
    ellipse(170*width/321, 95*height/207, 5*width/321, 5*height/207);
    ellipse(280*width/321, 15*height/207, 5*width/321, 5*height/207);
    ellipse(50*width/321, 95*height/207, 5*width/321, 5*height/207);
    ellipse(240*width/321, 55*height/207, 5*width/321, 5*height/207);
    //modificación del color verde según el numero aleatorio
    //resta de 50 a la modificación del color verde
    fill(243, a - 50, 52, a);
    ellipse(60*width/321, 45*height/207, 5*width/321, 5*height/207);
		//modificación tipo 2
    fill(243, 250, 52, aa);
    ellipse(220*width/321, 80*height/207, 5*width/321, 5*height/207);
    ellipse(175*width/321, 150*height/207, 5*width/321, 5*height/207);
    ellipse(95*width/321, 165*height/207, 5*width/321, 5*height/207);
    ellipse(170*width/321, 35*height/207, 5*width/321, 5*height/207);
    ellipse(40*width/321, 85*height/207, 5*width/321, 5*height/207);
    //modificación tipo 3
    fill(243, 250, 52, aaa);
    ellipse(30*width/321, 180*height/207, 5*width/321, 5*height/207);
    ellipse(200*width/321, 65*height/207, 5*width/321, 5*height/207);

    //nave
    //uso de variables para afectar el movimiento de la nave tanto en X como en Y
    // triangulo- superior e inferior
    fill(255, 30, 40);
    triangle((120 + movX)*width/321, (247 + movY)*height/207, (140 + movX)*width/321, (247 + movY)*height/207, (140 + movX)*width/321, (267 + movY)*height/207);
    fill(255);
    triangle((80 + movX)*width/321, (300 + movY)*height/207, (90 + movX)*width/321, (309 + movY)*height/207, (115 + movX)*width/321, (270 + movY)*height/207);
    //cuerpo central de la nave
    fill(255, 122, 15);
    quad((80 + movX)*width/321, (287 + movY)*height/207, (120 + movX)*width/321, (247 + movY)*height/207, (140 + movX)*width/321, (267 + movY)*height/207, (100 + movX)*width/321, (307 + movY)*height/207);
    fill(255);
    //circulo de decoración 
    ellipse((118 + movX)*width/321, (267 + movY)*height/207, 15*width/321, 15*height/207);
    //variable modificada para el aumento en el eje X
    movX = movX + 5;
    //variable modificada para la resta en el eje Y
    movY = movY - 6;
  }
  //creación de una segunda condición
	//Después del frame 75 se reproduce la transición entre la primera y segunda parte
  //de la "historia"
  if (frameCount > 75) {
    //creación de una especie de telon que desciende
    //nuevo fondo para la nueva parte 
    fill(2, 20, 55);
    //uso de una variable para aumentar la altura del rectángulo
    rect(0*width/321, 0*height/207, 321*width/321, (1 + velt)*height/207);
    //modificación de la variable velt para general el aumento en la altura
    velt = velt + 10;
  }
	//Inicio de la segunda parte de la "historia"
  //creación de una tercera condición
  //después del frame 100 inicia la segunda parte
  if (frameCount > 100) {
    //ambiente del escenario
    //arcos uno sobre otro
    fill(243, 250, 52);
    arc(162*width/321, 320*height/207, 400*width/321, 350*height/207, PI, TWO_PI);
    //se aumenta la transparencia del círculo del fondo
    fill(243, 250, 52, 100);
    arc(162*width/321, 310*height/207, 400*width/321, 350*height/207, PI, TWO_PI);
    //círculos de decoración 
    fill(145, 133, 0, 100);
    ellipse(230*width/321, 180*height/207, 30*width/321, 30*height/207);
    ellipse(150*width/321, 190*height/207, 30*width/321, 30*height/207);

    //estrellas 2
		//creación de nuevas variables para la modificación de las estrellas 
    //unicamente se le agraga el numero 1 para diferenciarlas de las anteriores
    //modificación tipo 1
    var a1 = random(100, 255);
    //modificación tipo 2
    var aa1 = random(100, 150);
    //modificación tipo 3
    var aaa1 = random(80, 100);
    //modificación tipo 1 
    //cambio de transpariencia a circulos de  a 254 como cantidades posibles
    //modificación tipo 1 
    //se cambian algunas coordenadas en X y en Y para acomodar mejor las estrellas
    //en el espacio
    fill(243, 250, 52, a1);
    ellipse(110*width/321, 70*height/207, 4*width/321, 4*height/207);
    ellipse(240*width/321, 55*height/207, 5*width/321, 5*height/207);
    ellipse(170*width/321, 95*height/207, 5*width/321, 5*height/207);
    ellipse(280*width/321, 15*height/207, 5*width/321, 5*height/207);
    ellipse(50*width/321, 95*height/207, 5*width/321, 5*height/207);
    ellipse(240*width/321, 55*height/207, 5*width/321, 5*height/207);
    ellipse(260*width/321, 75*height/207, 5*width/321, 5*height/207);
    //modificación del color verde según el numero aleatorio
    //resta de 50 a la modificación del color
    fill(243, a1 - 50, 52, a1);
    ellipse(60*width/321, 45*height/207, 7*width/321, 7*height/207);
    ellipse(290*width/321, 130*height/207, 7*width/321, 7*height/207);

    //se mantiene el segundo patrón correspondiente a la primera parte
    //modificación tipo 2
    fill(243, 250, 52, aa1);
    ellipse(220*width/321, 80*height/207, 5*width/321, 5*height/207);
    ellipse(190*width/321, 120*height/207, 5*width/321, 5*height/207);
    ellipse(95*width/321, 125*height/207, 5*width/321, 5*height/207);
    ellipse(170*width/321, 35*height/207, 5*width/321, 5*height/207);
    ellipse(40*width/321, 35*height/207, 5*width/321, 5*height/207);
    fill(243, 250, 52, aaa1);
    ellipse(30*width/321, 50*height/207, 5*width/321, 5*height/207);
    //se agregó este círculo 
    ellipse(200*width/321, 65*height/207, 5*width/321, 5*height/207);


    //nave
    //se usa la variable refY para aumentar el valor en Y
    //se empieza de atras hacia adelante 
    //triangulo inferior
    fill(255);
    triangle(152*width/321, (20 + refY)*height/207, 157*width/321, (0 + refY)*height/207, 163*width/321, (20 + refY)*height/207);
    //cuerpo rectangular de la nave
    fill(255, 122, 15);
    rect(150*width/321, (-15 + refY)*height/207, 15*width/321, 30*height/207);
    //circulo decorativo
    fill(255);
    ellipse(157*width/321, (-5 + refY)*height/207, 10*width/321, 10*height/207);
    fill(255, 30, 40);
    //triangulo superior
    triangle(150*width/321, (-15 + refY)*height/207, 166*width/321, (-15 + refY)*height/207, 158*width/321, (-20 + refY)*height/207);
    //modificación de la variable para generar el aumento en la coordenada Y 
    //multiplicada por la variable sto para generar el detenimiento del objeto
    refY = refY + 3 * sto;
    //condición para detener la nave encima del planeta
    if (refY > 50*height/207) {
      sto = 0;
    }
    //animación de estrella fugaz 
    fill(49, 218, 238);
    ellipse((-5 + poses)*width/321, 40*height/207, 60*width/321, 5*height/207);
    //causal de rapidez del movimiento de la estrella
    poses = poses + 20;
    //se agrega texto "the space are awesome"
    //se aumenta el tamaño de la letra
    textSize(22*width/321);
    //se cambia el estilo del texto a BOLD
    textStyle(BOLD);
    //función para mostrar el texto 
    //disminución de la entrada en X para dar efecto de entrada al texto
    text('THE SPACE IS AWESOME', (pal)*width/321, 40*height/207);
    //modificación de la variable pal por la variable stopal para generar el efecto
    pal = pal - 4 * stopal;
    //condición para que se detenga el texto en la posición requerida
    if (pal< 15*width/321) {
      stopal = 0;
    }
  }
  
  //if (frameCount<=200 ){
    //if (frameCount %1==0){
    //saveCanvas('miflipbook'+frameCount, 'jpg');
    //} 
  //}
	//print(frameCount);
}
