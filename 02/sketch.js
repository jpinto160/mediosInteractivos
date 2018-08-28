
var x=200;
var y=200;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  fill(0);
  //sección superior izquierda
	for (it=0; it<200; it=it+25){
    //empieza desde el triangulo esquina inf. derecha de abajo hacia arriba
    triangle(x-25,y-25,x,y-25,x,y);
    triangle(x-25+it,y-it,x-50+it,y-it,x-50+it,y-25-it);
    triangle(x-50+it,y-it,x-75+it,y-it,x-75+it,y-25-it);
    triangle(x-75+it,y-it,x-75+it,y-25-it,x-100+it,y-25-it);
    triangle(x-100+it,y-it,x-100+it,y-25-it,x-125+it,y-25-it);
    triangle(x-125+it,y-it,x-150+it,y-it,x-150+it,y-25-it);
    triangle(x-150+it,y-it,x-175+it,y-it,x-175+it,y-25-it);
    triangle(x-175+it,y-it,x-175+it,y-25-it,x-200+it,y-25-it);
    //lineas empezando a subir por Y 
    triangle(x-175+it,y-25-it,x-175+it,y-50-it,x-200+it,y-50-it);
    triangle(x-175+it,y-50-it,x-200+it,y-50-it,x-200+it,y-75-it);
    triangle(x-175+it,y-75-it,x-200+it,y-75-it,x-200+it,y-100-it);
    triangle(x-175+it,y-100-it,x-175+it,y-125-it,x-200+it,y-125-it);
    triangle(x-175+it,y-125-it,x-175+it,y-150-it,x-200+it,y-150-it);
    triangle(x-175+it,y-150-it,x-200+it,y-150-it,x-200+it,y-175-it);
    triangle(x-175,y-175,x-200,y-175,x-200,y-200);
  }
  fill(255);
  noStroke();
  rect(200,0,200,200);
  fill(0);
  
  //sección inferior izquierda
  for (it=0; it<200; it=it+25){
   //empieza desde el triangulo sup derecho hacia abajo 
    triangle(x,y,x-25,y,x-25,y+25);
    triangle(x-25+it,y+it,x-25+it,y+25+it,x-50+it,y+25+it);
    triangle(x-50+it,y+it,x-50+it,y+25+it,x-75+it,y+25+it);
    triangle(x-75+it,y+it,x-100+it,y+it,x-100+it,y+25+it);
    triangle(x-100+it,y+it,x-125+it,y+it,x-125+it,y+25+it);
    triangle(x-125+it,y+it,x-125+it,y+25+it,x-150+it,y+25+it);
    triangle(x-150+it,y+it,x-150+it,y+25+it,x-175+it,y+25+it);
    triangle(x-175+it,y+it,x-200+it,y+it,x-200+it,y+25+it);
    //lineas empezando a bajar por y 
  	triangle(x-175+it,y+25+it,x-200+it,y+25+it,x-200+it,y+50+it);
    triangle(x-175+it,y+50+it,x-175+it,y+75+it,x-200+it,y+75+it);
    triangle(x-175+it,y+75+it,x-175+it,y+100+it,x-200+it,y+100+it);
    triangle(x-175+it,y+100+it,x-200+it,y+100+it,x-200+it,y+125+it);
    triangle(x-175+it,y+125+it,x-200+it,y+125+it,x-200+it,y+150+it);
    triangle(x-175+it,y+150+it,x-175+it,y+175+it,x-200+it,y+175+it);
    triangle(x-175,y+175,x-175,y+200,x-200,y+200);
    
  }
  
  //sección superior derecha
  for (it=0; it<200; it=it+25){
    //emepezando por el triangulo inf izquierdo hacia arriba
    triangle(x,y,x+25,y,x+25,y-25);
    triangle(x+it,y-25+it,x+it,y-50+it,x+25+it,y-50+it);
    triangle(x+it,y-50+it,x+it,y-75+it,x+25+it,y-75+it);
    triangle(x+it,y-75+it,x+25+it,y-75+it,x+25+it,y-100+it);
    triangle(x+it,y-100+it,x+25+it,y-100+it,x+25+it,y-125+it);
    triangle(x+it,y-125+it,x+it,y-150+it,x+25+it,y-150+it);
    triangle(x+it,y-150+it,x+it,y-175+it,x+25+it,y-175+it);
    triangle(x+it,y-175+it,x+25+it,y-175+it,x+25+it,y-200+it);
    //lineas enpezando a moverse por x
    triangle(x+25+it,y-175+it,x+50+it,y-175+it,x+50+it,y-200+it);
    triangle(x+50+it,y-175+it,x+50+it,y-200+it,x+75+it,y-200+it);
    triangle(x+75+it,y-175+it,x+75+it,y-200+it,x+100+it,y-200+it);
    triangle(x+100+it,y-175+it,x+125+it,y-175+it,x+125+it,y-200+it);
    triangle(x+125+it,y-175+it,x+150+it,y-175+it,x+150+it,y-200+it);
    triangle(x+150+it,y-175+it,x+150+it,y-200+it,x+175+it,y-200+it);
    triangle(x+175,y-175,x+175,y-200,x+200,y-200);
  }
  fill(255);
  noStroke();
  rect(200,200,200,200);
  fill(0);
  //sección inferior derecha
  fill(230,180,60);
  
  for (it=0; it<200; it=it+25){
    
    triangle(x,y,x,y+25,x+25,y+25);
    triangle(x+25-it,y+it,x+50-it,y+it,x+50-it,y+25+it);
    triangle(x+50-it,y+it,x+75-it,y+it,x+75-it,y+25+it);
    triangle(x+75-it,y+it,x+75-it,y+25+it,x+100-it,y+25+it);
    triangle(x+100-it,y+it,x+100-it,y+25+it,x+125-it,y+25+it);
    triangle(x+125-it,y+it,x+150-it,y+it,x+150-it,y+25+it);
    triangle(x+150-it,y+it,x+175-it,y+it,x+175-it,y+25+it);
    triangle(x+175-it,y+it,x+175-it,y+25+it,x+200-it,y+25+it);
    
    triangle(x+175-it,y+25+it,x+175-it,y+50+it,x+200-it,y+50+it);
    triangle(x+175-it,y+50+it,x+200-it,y+75+it,x+200-it,y+50+it);
    triangle(x+175-it,y+75+it,x+200-it,y+75+it,x+200-it,y+100+it);
    triangle(x+175-it,y+100+it,x+175-it,y+125+it,x+200-it,y+125+it);
    triangle(x+175-it,y+125+it,x+175-it,y+150+it,x+200-it,y+150+it);
    triangle(x+175-it,y+150+it,x+200-it,y+150+it,x+200-it,y+175+it);
    triangle(x+175,y+175,x+200,y+175,x+200,y+200);
  }
  
  
  
}