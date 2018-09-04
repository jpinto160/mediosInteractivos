
//definición de variables requeridas en el proyecto
var movX = 0;
var movY = 0;
var rot = 1;
var velt = 0;
var refY = 0;
var sto = 1;
var poses = 0;
var pal = 0;
var stopal = 1;

function setup() {
  createCanvas(321, 207);
  frameRate(30);
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
    arc(321, 207, 240, 240, PI, -HALF_PI);
    //parte central de la luna
    //arco central de luna 
    //color al 100% de opacidad(transpariencia)
    fill(243, 250, 52);
    arc(321, 207, 200, 200, PI, -HALF_PI);
    //arco de decoración con color con transparencia
    fill(145, 133, 0, 100);
    ellipse(295, 155, 30, 30);
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
    ellipse(110, 70, 4, 4);
    ellipse(240, 55, 5, 5);
    ellipse(170, 95, 5, 5);
    ellipse(280, 15, 5, 5);
    ellipse(50, 95, 5, 5);
    ellipse(240, 55, 5, 5);
    //modificación del color verde según el numero aleatorio
    //resta de 50 a la modificación del color verde
    fill(243, a - 50, 52, a);
    ellipse(60, 45, 5, 5);
		//modificación tipo 2
    fill(243, 250, 52, aa);
    ellipse(220, 80, 5, 5);
    ellipse(175, 150, 5, 5);
    ellipse(95, 165, 5, 5);
    ellipse(170, 35, 5, 5);
    ellipse(40, 85, 5, 5);
    //modificación tipo 3
    fill(243, 250, 52, aaa);
    ellipse(30, 180, 5, 5);
    ellipse(200, 65, 5, 5);

    //nave
    //uso de variables para afectar el movimiento de la nave tanto en X como en Y
    // triangulo- superior e inferior
    fill(255, 30, 40);
    triangle(120 + movX, 247 + movY, 140 + movX, 247 + movY, 140 + movX, 267 + movY);
    fill(255);
    triangle(80 + movX, 300 + movY, 90 + movX, 309 + movY, 115 + movX, 270 + movY);
    //cuerpo central de la nave
    fill(255, 122, 15);
    quad(80 + movX, 287 + movY, 120 + movX, 247 + movY, 140 + movX, 267 + movY, 100 + movX, 307 + movY);
    fill(255);
    //circulo de decoración 
    ellipse(118 + movX, 267 + movY, 15, 15);
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
    rect(0, 0, 321, 1 + velt);
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
    arc(162, 320, 400, 350, PI, TWO_PI);
    //se aumenta la transparencia del círculo del fondo
    fill(243, 250, 52, 100);
    arc(162, 310, 400, 350, PI, TWO_PI);
    //círculos de decoración 
    fill(145, 133, 0, 100);
    ellipse(230, 180, 30, 30);
    ellipse(150, 190, 30, 30);

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
    ellipse(110, 70, 4, 4);
    ellipse(240, 55, 5, 5);
    ellipse(170, 95, 5, 5);
    ellipse(280, 15, 5, 5);
    ellipse(50, 95, 5, 5);
    ellipse(240, 55, 5, 5);
    ellipse(260, 75, 5, 5);
    //modificación del color verde según el numero aleatorio
    //resta de 50 a la modificación del color
    fill(243, a1 - 50, 52, a1);
    ellipse(60, 45, 7, 7);
    ellipse(290, 130, 7, 7);

    //se mantiene el segundo patrón correspondiente a la primera parte
    //modificación tipo 2
    fill(243, 250, 52, aa1);
    ellipse(220, 80, 5, 5);
    ellipse(190, 120, 5, 5);
    ellipse(95, 125, 5, 5);
    ellipse(170, 35, 5, 5);
    ellipse(40, 35, 5, 5);
    fill(243, 250, 52, aaa1);
    ellipse(30, 50, 5, 5);
    //se agregó este círculo 
    ellipse(200, 65, 5, 5);


    //nave
    //se usa la variable refY para aumentar el valor en Y
    //se empieza de atras hacia adelante 
    //triangulo inferior
    fill(255);
    triangle(152, 20 + refY, 157, 0 + refY, 163, 20 + refY);
    //cuerpo rectangular de la nave
    fill(255, 122, 15);
    rect(150, -15 + refY, 15, 30);
    //circulo decorativo
    fill(255);
    ellipse(157, -5 + refY, 10, 10);
    fill(255, 30, 40);
    //triangulo superior
    triangle(150, -15 + refY, 166, -15 + refY, 158, -20 + refY);
    //modificación de la variable para generar el aumento en la coordenada Y 
    //multiplicada por la variable sto para generar el detenimiento del objeto
    refY = refY + 3 * sto;
    //condición para detener la nave encima del planeta
    if (refY > 135) {
      sto = 0;
    }
    //animación de estrella fugaz 
    fill(49, 218, 238);
    ellipse(-5 + poses, 40, 60, 5);
    //causal de rapidez del movimiento de la estrella
    poses = poses + 20;
    //se agrega texto "the space are awesome"
    //se aumenta el tamaño de la letra
    textSize(22);
    //se cambia el estilo del texto a BOLD
    textStyle(BOLD);
    //función para mostrar el texto 
    //disminución de la entrada en X para dar efecto de entrada al texto
    text('THE SPACE IS AWESOME', 321 - pal, 40);
    //modificación de la variable pal por la variable stopal para generar el efecto
    pal = pal + 4 * stopal;
    //condición para que se detenga el texto en la posición requerida
    if (pal > 290) {
      stopal = 0;
    }
  }

}