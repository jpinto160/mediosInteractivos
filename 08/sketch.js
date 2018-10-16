var vacas = [];
var abejas = [];
var abejasr = [];
var pajaros = [];
var pastold = [];
var torov = [];
var terne = [];
var direcv = 1;
var direcxp = 0.3;
var direcyp = 0.3;
var direcxt = 0.5;
var direcyt = 0.5;
var direcxte = 0.5;
var direcyte = 0.5;
var direcxpan = 0.5;
var direcypan = 0.5;
var panta=[];
var terne;
var xter = 200;
var yter = 200;

var vel = 0;
var r=0;


function setup() {
  createCanvas(600, 400);
  //condiciones para crear y posicionar a los componentes del ecosistema(especies)
  for (var i = 0; i < 30; i = i + 1) {
    var tempX = random(500, 580);
    var tempY = random(180, 240);
    abejas[i] = new abeja(tempX, tempY);
  }
  for (var ir = 0; ir < 10; ir = ir + 1) {
    var posxar = random(0, 550);
    var posyar = random(0, 190);
    abejasr[ir] = new abejar(posxar, posyar);
  }

  for (var iv = 0; iv < 1; iv = iv + 1) {
    var posxv = random(20, 300);
    var posyv = random(200, 400);
    vacas[iv] = new vaca(posxv, posyv);
  }

  for (var ip = 0; ip < 3; ip = ip + 1) {
    var posxp = random(0, 50);
    var posyp = random(0, 100);
    pajaros[ip] = new pajaro(posxp, posyp);
  }

  for (var ito = 0; ito < 1; ito = ito + 1) {
    var posxto = random(300, 600);
    var posyto = random(210, 300);
    torov[ito] = new toro(posxto, posyto);
  }
  for (var il = 0; il < 400; il = il + 1) {
    var posxl = random(0, width);
    var posyl = random(180, height);
    pastold[il] = new pastol(posxl, posyl);
  }

  for (var ipam = 0; ipam < 1; ipam = ipam + 1) {
    var posxpam = random(0, 200);
    var posypam = random(200, 250);
    panta[ipam] = new pantera(posxpam, posypam);
  }
  for (var iter = 0; iter < 1; iter = iter + 1) {
    terne[iter] = new ternero(xter, yter);
  }
}


function draw() {
  //fondo
  background(0, 192, 255);
  //rectangulo que se modifica con la velocidad del raton 
   fill(35,93,142,r);
 rect(0,0,600,400);
  //rectángulo para simular el terreno
  noStroke();
  fill(65, 103, 33);
  rect(0, 200, 600, 200);
  //arbusto 1
  fill(34, 124, 30);
  arc(100, 220, 80, 80, PI, TWO_PI);
  arc(130, 220, 60, 100, PI, TWO_PI);
  arc(140, 220, 80, 80, PI, TWO_PI);
  //arbusto 2
  fill(34, 124, 30);
  arc(200, 290, 80, 80, PI, TWO_PI);
  arc(230, 290, 60, 100, PI, TWO_PI);
  arc(240, 290, 80, 80, PI, TWO_PI);
  //arbusto 3
  fill(34, 124, 30);
  arc(400, 320, 80, 80, PI, TWO_PI);
  arc(430, 320, 60, 100, PI, TWO_PI);
  arc(440, 320, 80, 80, PI, TWO_PI);
  //arbol
  //tronco del arbol
  beginShape();
  fill(107, 62, 29);
  vertex(550, 140);
  bezierVertex(570, 140, 570, 280, 550, 280);
  vertex(600, 280);
  vertex(600, 140);
  endShape();
  //rama
  beginShape();
  vertex(500, 165);
  bezierVertex(530, 165, 560, 165, 565, 175);
  vertex(565, 165);
  endShape();
  //hojas
  fill(14, 67, 26);
  ellipse(550, 120, 60, 60);
  ellipse(580, 140, 60, 60);
  ellipse(565, 110, 60, 60);
  ellipse(580, 100, 60, 60);
  //panal de abejas
  fill(219, 227, 85);
  rect(537, 165, 2, 10);
  beginShape();
  vertex(530, 175);
  bezierVertex(530, 165, 545, 165, 545, 175);
  bezierVertex(540, 190, 535, 190, 530, 175);
  endShape();
  //sol
  ellipse(100, 80, 100, 100);
  //nubes
  //nube 1
  fill(255);
  ellipse(200, 50, 30, 30);
  ellipse(220, 50, 40, 40);
  ellipse(240, 50, 20, 30);
  //nube 2
  fill(255);
  ellipse(340, 90, 40, 30);
  ellipse(360, 90, 40, 40);
  ellipse(380, 90, 20, 30);
  //nube 3
  fill(255);
  ellipse(440, 70, 40, 30);
  ellipse(460, 70, 40, 40);
  ellipse(480, 70, 20, 30);


  //interacción pasto + vaca +toro
  for (var il1 = 0; il1 < pastold.length; il1 = il1 + 1) {
    pastold[il1].dibujarsel();
  }
  //for (var iter1=0; iter1< terne.length; iter1=iter1+1){
  // terne[iter1].dibujarsete();
  // terne[iter1].moversete();
  //}
  //se dibuja la vaca y se le da movimiento
  for (var iv = 0; iv < vacas.length; iv = iv + 1) {
    vacas[iv].dibujarsev();
    vacas[iv].moversev();
    //se dibuja el toro y se le da movimiento
    for (var ito = 0; ito < torov.length; ito = ito + 1) {
      torov[ito].dibujarset();
      torov[ito].moverset();
    //se dibuja la pantera y se le da movimiento
      for (var ipam=0; ipam <1;ipam=ipam+1){
    
        //se dibuja el ternero y se le da movimiento
      for (var iter = 0; iter < terne.length; iter = iter + 1) {
 				terne[iter].dibujarsete();
        terne[iter].moversete();
        //se dibuja el pasto
        for (var il = 0; il < pastold.length; il = il + 1) {
          pastold[il].dibujarsel();
          //condición para que desaparezca el pasto si la vaca pasa por encima
          if (dist(pastold[il].x, pastold[il].y, vacas[iv].x, vacas[iv].y) < 70) {
            pastold[il].morirsel();
          }
          //condición para que desaparezca el pasto cuando el toro pasa por encima
          if (dist(pastold[il].x, pastold[il].y, torov[ito].x, torov[ito].y) < 70) {
            pastold[il].morirsel();
          }
        }
        //condición para hacer que el ternero desaparezca cuando la pantera esté cerca
        if (dist(panta[ipam].x, panta[ipam].y, terne[iter].x, terne[iter].y) <50) {

          terne[iter].morirsete();
        }

        //condición para que cuando el toro y la vaca se junten nazca el ternero
        if (dist(torov[ito].x, torov[ito].y, vacas[iv].x, vacas[iv].y) < 100) {

          terne[iter].nacerte();

        }
        //llamado de variables para  dibujar y mover el toro y la pantera 
  			panta[ipam].dibujarsepan();
  			panta[ipam].moversepan();
        torov[ito].dibujarset();
        torov[ito].moverset();
      }
      //llamado de variables para dibujar y mover a la vaca 
      vacas[iv].dibujarsev();
      vacas[iv].moversev();

      }
    }
  }


  //condición para dibujar 3 abejas reinas
  for (var ir1 = 0; ir1 < abejasr.length; ir1 = ir1 + 1) {
    abejasr[ir1].dibujarsear();
    abejasr[ir1].moversear();
  }
  // interacción pajaros + abejas + abejasreinas
  for (var ip = 0; ip < pajaros.length; ip = ip + 1) {
    pajaros[ip].dibujarsep();
    pajaros[ip].moversep();
    //condición para dibujar 50 abejas
    for (var i = 0; i < abejas.length; i = i + 1) {
      abejas[i].dibujarsea();
      abejas[i].moversea();
      //condición para crear 3 abejas reina
      for (var ir = 0; ir < abejasr.length; ir = ir + 1) {
        abejasr[ir].dibujarsear();

        //condición para hacer que las abejas reinas se coman a las abejas normales
        //condición de proximidad
        if (dist(pajaros[ip].x, pajaros[ip].y, abejas[i].x, abejas[i].y) < 30) {
          abejas[i].morirsea();
        }
        if (dist(pajaros[ip].x, pajaros[ip].y, abejasr[ir].x, abejasr[ir].y) < 30) {
          abejasr[ir].morirsear();
          pajaros[ip].crecer();
        }
      }
    }



  }
 //difX es la resta de la posicion x del mouse actual con la posicion del mouse anterior
  var difX = abs(mouseX - pmouseX);

  //difY es la resta de la posicion y del mouse actual con la posicion del mouse anterior
  var difY = abs(mouseY - pmouseY);

  //con floor() se redondea la velocidad a un numero entero
  //para simplificar, se puede tomar la velocidad como la suma de las diferencias en posicion en x y en y
  var vel = floor(difX + difY);

  //texto que muestra la velocidad en la pantalla
  fill(255);

  text("Velocidad del ratón: " + vel, 480, 10);

  //revisa que la velocidad del mouse sea mayor a 80
  if (vel > 80) {
		r=150;
  } else { //si la velocidad es menor a 80

    r=0;

  }
 
}

//especie 1= abejas
function abeja(mix, miy) {
  //caracteristicas
  this.x = mix;
  this.y = miy;
  this.abevivas = true;

  //habilidades
  //función para que se dibuje 
  this.dibujarsea = function() {
    if (this.abevivas == true) {
      stroke(0, 0, 0);
      fill(200, 200, 0);
      ellipse(this.x + 0, this.y + 0, 10, 5);
      ellipse(this.x + 3, this.y - 3, 5, 5);
    }
    //función para que se "mueran"
    this.morirsea = function() {
      this.abevivas = false;
      this.x = 2000;
      this.y = 3000;
    }
    //función para que se muevan 
    this.moversea = function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
  }

}
//abejas reina
function abejar(mixa, miya) {
  //caracteristicas
  this.x = mixa;
  this.y = miya;
  this.reinavivas = true;

  //habilidades
  //función para que se dibujen
  this.dibujarsear = function() {
    //función para que "vivan"
    if (this.reinavivas == true) {
      stroke(255, 255, 255);
      fill(0, 0, 0);
      ellipse(this.x + 0, this.y + 0, 10, 5);
      ellipse(this.x + 3, this.y - 3, 5, 5);
    }
    //condición para que se muera
    this.morirsear = function() {
      this.reinavivas = false;
      this.x = 2000;
      this.y = 3000;
    }
    //condición para que se mueva
    this.moversear = function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }

  }

}
//especie 2=vaca
function vaca(mixv, miyv) {
  //caracteristicas
  this.x = mixv;
  this.y = miyv;
  this.vacavi = true;

  //habilidades 
  //condición para que se dibujen
  this.dibujarsev = function() {
    if (this.vacavi == true) {
      fill(255);
      noStroke();
      //cuerpo de la vaca
      ellipse(this.x, this.y, 120, 90);
      stroke(1);
      ellipse(this.x + 60, this.y - 20, 50, 60);
      noStroke();
      rect(this.x - 40, this.y + 20, 20, 50);
      rect(this.x + 20, this.y + 20, 20, 50);
      fill(0);
      ellipse(this.x + 10, this.y - 10, 20, 30);
      ellipse(this.x - 10, this.y + 10, 20, 30);
      ellipse(this.x - 15, this.y - 5, 20, 30);
      ellipse(this.x - 25, this.y + 10, 20, 30);
      //boca
      fill(218, 101, 186);
      ellipse(this.x + 65, this.y - 10, 30, 3);
      //ojos
      fill(255);
      stroke(1);
      ellipse(this.x + 57, this.y - 30, 6, 10);
      ellipse(this.x + 69, this.y - 30, 6, 10);
      fill(0);
      ellipse(this.x + 58, this.y - 29, 3, 3);
      ellipse(this.x + 70, this.y - 29, 3, 3);
      //nariz
      fill(134, 28, 105);
      ellipse(this.x + 65, this.y - 18, 12, 8);
      ellipse(this.x + 58, this.y - 29, 3, 3);
      ellipse(this.x + 70, this.y - 29, 3, 3);

    }
		//condición para moverse
    this.moversev = function() {
      this.x = this.x + direcv;

      if (this.x > width - 20) {
        direcv = -0.3;
      }

      if (this.x <= 0) {
        direcv = 0.3;
      }
    }
  }
}
//especie 3= toro
function toro(mixt, miyt) {
  //caracteristicas
  this.x = mixt;
  this.y = miyt;
  this.torovi = true;
  //habilidades
  //condición para dibujarse
  this.dibujarset = function() {
    if (this.torovi == true) {
      //cuerpo
      noStroke();
      fill(135, 80, 21);
      ellipse(this.x, this.y, 120, 90);
      stroke(1);
      ellipse(this.x - 60, this.y - 20, 50, 60);
      noStroke();
      rect(this.x - 40, this.y + 20, 20, 50);
      rect(this.x + 20, this.y + 20, 20, 50);
      fill(0);
      //boca
      fill(218, 101, 186);
      ellipse(this.x - 65, this.y - 10, 30, 3);
      //ojos
      fill(255);
      stroke(1);
      ellipse(this.x - 57, this.y - 30, 6, 10);
      ellipse(this.x - 69, this.y - 30, 6, 10);
      fill(0);
      ellipse(this.x - 58, this.y - 29, 3, 3);
      ellipse(this.x - 70, this.y - 29, 3, 3);
      //nariz
      fill(134, 28, 105);
      ellipse(this.x - 65, this.y - 18, 12, 8);
      ellipse(this.x - 58, this.y - 29, 3, 3);
      ellipse(this.x - 70, this.y - 29, 3, 3);
    }
    //condición para moverse
    this.moverset = function() {
      this.x = this.x + direcxt;
      this.y = this.y + direcyt;

      if (this.x < 0) {
        direcxt = 0.5;
      }
      if (this.x > width - 40) {
        direcxt = -0.5;
      }
      if (this.y < 220) {
        direcyt = 0.5;
      }
      if (this.y > height - 40) {
        direcyt = -0.5;
      }
    }
  }
}
//especie 4=pajaros
function pajaro(mixp, miyp) {
  //caracteristicas
  this.x = mixp;
  this.y = miyp;
  this.c = 0;
  this.parajarovi = true;

  //habilidades
  //condición para dibujarse
  this.dibujarsep = function() {
    stroke(0);
    //ala 1
    beginShape();
    noFill();
    vertex(this.x + this.c, this.y + this.c);
    bezierVertex(this.x + 20 + this.c, this.y - 20 - this.c, this.x + 40 + this.c, this.y + 10 + this.c, this.x + 40 + this.c, this.y + 20 + this.c);
    endShape();
    //ala 2
    beginShape();
    noFill();
    vertex(this.x + 80 + this.c, this.y + this.c);
    bezierVertex(this.x + 40 + this.c, this.y - 30 - this.c, this.x + 40 + this.c, this.y + 10 + this.c, this.x + 40 + this.c, this.y + 20 + this.c);
    endShape();
    fill(132, 119, 30);
    ellipse(this.x + 38, this.y + 10, 20 + this.c, 20 + this.c);
    fill(0);
    ellipse(this.x + 34, this.y + 7, 3 + this.c, 3 + this.c);
    ellipse(this.x + 42, this.y + 7, 3 + this.c, 3 + this.c);
    beginShape();
    vertex(this.x + 38 + this.c, this.y + 9 + this.c);
    vertex(this.x + 42 + this.c, this.y + 12 + this.c);
    vertex(this.x + 38 + this.c, this.y + 15 + this.c);
    vertex(this.x + 34 + this.c, this.y + 12 + this.c);
    endShape();
  }
  //condición para moverse
  this.moversep = function() {
    this.x = this.x + direcxp;
    this.y = this.y + direcyp;
    if (this.x >= width - 40) {
      direcxp = 0;
      direcxp = -1;
    }
    if (this.x <= 0) {
      direcxp = 0;
      direcxp = 1;
    }
    if (this.y >= 180) {
      direcyp = 0;
      direcyp = -1;
    }
    if (this.y <= 0) {
      direcyp = 0;
      direcyp = 1;
    }
  }
  //condición para que crezcan
  this.crecer = function() {
    this.c = this.c + 2;

  }



}
//especie 5= pasto largo
function pastol(mixl, miyl) {
  //caracteristicas
  this.x = mixl;
  this.y = miyl;
  this.pastolvivo = true;

  //habilidades
  //condición para dibujarse
  this.dibujarsel = function() {
    if (this.pastolvivo == true) {
      beginShape();
      noStroke();
      fill(55, 255, 45);
      vertex(this.x, this.y);
      bezierVertex(this.x, this.y, this.x + 20, this.y + 8, this.x + 18, this.y + 25);
      vertex(this.x + 15, this.y + 25);
      bezierVertex(this.x + 16, this.y + 25, this.x + 12, this.y + 4, this.x, this.y);
      endShape();
    }
  }
  //condición para morirse
  this.morirsel = function() {
    this.pastolvivo = false;
  }

}
//especie 6=terneros
function ternero(mixte, miyte) {
  //caracteristicas
  this.x = mixte;
  this.y = miyte;
  this.tervivo = false;
  //habilidades
  //condición para nacer
  this.nacerte = function() {
    this.tervivo = true;
  }
  //condición para dibujarse
  this.dibujarsete = function() {
    if (this.tervivo == true) {
      fill(255);
      noStroke();
      //cuerpo del ternero
      ellipse(this.x, this.y, 60, 30);
      noStroke();
      rect(this.x + 5, this.y + 5, 10, 20);
      rect(this.x - 20, this.y + 5, 10, 20);
      stroke(1);
      //cabeza del ternero
      ellipse(this.x + 30, this.y - 5, 20, 25);
      //ojos
      ellipse(this.x + 27, this.y - 8, 3, 5);
      ellipse(this.x + 33, this.y - 8, 3, 5);
      //boca
      noStroke();
      fill(218, 101, 186);
      arc(this.x + 30, this.y - 3, 10, 10, TWO_PI, PI);
    }
  }
  //condición para morirse 
  this.morirsete = function() {
    this.tervivo = false;
  }
  //condición para moverse
  this.moversete = function() {
    this.x = this.x + direcxte;
    this.y = this.y + direcyte;

    if (this.x < 0) {
      direcxte = 0.5;
    }
    if (this.x > width - 40) {
      direcxte = -0.5;
    }
    if (this.y < 220) {
      direcyte = 0.5;
    }
    if (this.y > height - 40) {
      direcyte = -0.5;
    }
		//condición para arrastrar 
    this.arrastrarsete = function() {

      this.x = mouseX;
      this.y = mouseY;

    }

  }

}
//especie 7=pantera
function pantera(mixpan, miypan) {
  //Caracteristicas
  this.x = mixpan;
  this.y = miypan;
  this.panvivo = true;
  //habilidades
  //condición para dibujarse 
  this.dibujarsepan = function() {
    if (this.panvivo == true) {
      fill(0);
      rect(this.x, this.y, 80, 40, 20);
      stroke(255);
      rect(this.x + 60, this.y - 15, 30, 30, 10);
      triangle(this.x + 67, this.y - 15, this.x + 73, this.y - 15, this.x + 70, this.y - 25);
      triangle(this.x + 77, this.y - 15, this.x + 84, this.y - 15, this.x + 82, this.y - 25);
      rect(this.x + 20, this.y + 30, 10, 25, 10);
      rect(this.x + 50, this.y + 30, 10, 25, 10);
      fill(255);
      ellipse(this.x + 71, this.y - 5, 3, 6);
      ellipse(this.x + 79, this.y - 5, 3, 6);
      arc(this.x + 75, this.y + 2, 15, 15, TWO_PI, PI);
    }
  }
  //condición para moverse
  this.moversepan = function() {
    this.x = this.x + direcxpan;
    this.y = this.y + direcypan;

    if (this.x < 0) {
      direcxpan = 0.5;
    }
    if (this.x > width - 40) {
      direcxpan = -0.5;
    }
    if (this.y < 220) {
      direcypan = 0.5;
    }
    if (this.y > height - 40) {
      direcypan = -0.5;
    }
  }
}

//funcion que se activa si el mouse es arrastrado
function mouseDragged() {
  for (var iter = 0; iter < 1; iter = iter + 1) {
    //revisa si la posición del mouse es cercana a la posicion de la ellipse
    if (dist(mouseX, mouseY, terne[iter].x, terne[iter].y) < 40) {
      terne[iter].arrastrarsete();
    }
  }
}
