var musica = 1;
var analizador;
var nivel;

var mimusica1;
var mimusica2;
var mimusica3;
var volumen = 0;
var volumenbar;
var paneo = 0;
var paneobar;
var imagenselec = 0;
var logo;
var imagen1;
var imagen2;
var imagen3;
var luzen1 = 1;
var luzen2 = 1;
var luzen3 = 1;
var on1;
var on2;
var on3 = 150;

var colsel = 0;
var colu11;
var colu12;
var colu13;

var colram1;
var colram2;
var colram3;

var posxlu;
var posylu;
var posx1lu;
var posy1lu;

function preload() {
  mimusica1 = loadSound('assets/music.mp3');
  mimusica2 = loadSound('assets/music2.mp3');
  mimusica3 = loadSound('assets/music3.mp3');
  logo = loadImage('assets/LOGO DJ JUAN PINTO.jpg');
  imagen1 = loadImage('assets/imagen1.jpeg');
  imagen2 = loadImage('assets/imagen2.jpg');
  analizador = new p5.Amplitude();
  analizador.setInput(mimusica1);
  analizador.setInput(mimusica2);
  analizador.setInput(mimusica3);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  nivel = analizador.getLevel();
  fill(0);
  rect(0, 300, 500, 200);
  //primera sección
  fill(255);
  text('canciones', 20, 320);

  text('controles', 20, 410);

  //botones selección de canción
  //canción 1
  fill(255);
  rect(20, 340, 20, 20);
  fill(0);
  text('1', 27, 355);

  //canción 2
  fill(255);
  rect(60, 340, 20, 20);
  fill(0);
  text('2', 67, 355);

  //canción 3
  fill(255);
  rect(100, 340, 20, 20);
  fill(0);
  text('3', 107, 355);

  //boton de cue
  fill(255);

  rect(20, 420, 60, 30);
  fill(0);
  text('CUE', 40, 440);

  //boton de play
  fill(255);

  rect(20, 460, 60, 30);
  fill(0);
  text('PLAY', 40, 480);

  //boton de pausa
  fill(255);
  rect(90, 460, 60, 30);
  fill(0);
  text('PAUSE', 105, 480);

  //segunda sección
  fill(40);
  rect(160, 310, 150, 180);

  fill(255);
  text('volumen', 180, 330);
  //boton disminución de volumen
  fill(255);
  rect(180, 340, 20, 20);
  fill(0);
  line(185, 350, 195, 350);
  //boton aumento de volumen
  fill(255);
  rect(220, 340, 20, 20);
  line(225, 350, 235, 350);
  line(230, 345, 230, 355);

  //barra indicadora de volumen
  rect(180, 370, 80, 20);
  fill(0);
  rect(183, 373, volumen, 14);
  volumenbar = map(volumen, 0, 74, 0, 1);
  mimusica1.setVolume(volumenbar);
  mimusica2.setVolume(volumenbar);
  mimusica3.setVolume(volumenbar);

  //sección de paneo

  fill(255);
  text('paneo', 180, 410);

  //boton disminución de paneo
  fill(255);
  rect(180, 420, 20, 20);
  fill(0);
  text('L', 187, 436);

  //boton aumento de paneo
  fill(255);
  rect(220, 420, 20, 20);
  fill(0);
  text('R', 226, 436);

  //barra de indicación lado del paneo
  fill(255);
  rect(180, 450, 80, 20);

  fill(0);
  strokeWeight(5);
  line(paneobar, 453, paneobar, 467);
  paneobar = map(paneo, -1, 1, 182, 260);
  mimusica1.pan(paneo);
  mimusica2.pan(paneo);
  mimusica3.pan(paneo);
  strokeWeight(1);

  //ESCENARIO
  fill(40);
  rect(0, 0, 500, 300);

  //"pantalla central e inferior"
  fill(255);
  rect(100, 20, 300, 150);

  //imagenes 
  push();
  if (mouseIsPressed == true) {
    
    if (mouseX > 320 && mouseX < 340 && mouseY > 420 && mouseY < 440) {
      imagenselec = 0;
    }

    if (mouseX > 360 && mouseX < 380 && mouseY > 420 && mouseY < 440) {
      imagenselec = 1;
     
    }

    if (mouseX > 400 && mouseX < 420 && mouseY > 420 && mouseY < 440) {
      imagenselec = 2;
    }
    if (mouseX > 440 && mouseX < 460 && mouseY > 420 && mouseY < 440) {
      imagenselec = 3;
    }
   
  }
   if (imagenselec == 0) {
      fill(colram1, colram2, colram3);
      image(logo, 100, 20, 300, 150);
      rect(100, 20, 300, 150);
    }
    if (imagenselec == 1) {
      tint(colram1,colram2,colram3);
      image(imagen1, 100, 20, 300, 150);
    }
    if (imagenselec == 2) {
      image(imagen2, 100, 20, 300, 150);
    }
   if (imagenselec == 3) {
     	fill(0);
     	rect(100, 20, 300, 150);
     	tint(colram1,colram2,colram3);
      image(logo, 100, 20, 300,150);
    }
  

  pop();

  fill(colu11, colu12, colu13, on2 - nivel * 200);
  rect(100, 200, 300, 100);
  fill(40);
  rect(0, 280, 500, 20);
  fill(255);

  //color luces 
  fill(colu11, colu12, colu13);
  //luces 1
  fill(colu11, colu12, colu13, on1 - nivel * 400);
  rect(80, 20, 10, 180);
  rect(410, 20, 10, 180);

  //luces 2
  fill(colu11, colu12, colu13, on2 - nivel * 400);
  ellipse(60, 40, 10, 10);
  ellipse(40, 80, 10, 10);
  ellipse(60, 120, 10, 10);
  ellipse(40, 160, 10, 10);
  ellipse(60, 200, 10, 10);

  ellipse(440, 40, 10, 10);
  ellipse(460, 80, 10, 10);
  ellipse(440, 120, 10, 10);
  ellipse(460, 160, 10, 10);
  ellipse(440, 200, 10, 10);

  //luces 3
  fill(colu11, colu12 - nivel * 600, colu13, on3);
  noStroke();
  triangle(-40, 40, posx1lu, posy1lu, posx1lu + 100, posy1lu);
  triangle(500, 40, posxlu, posylu, posxlu + 100, posylu);

  //sección 3 control luces
  fill(255);
  text('luces', 330, 320);
  noStroke();
  //botones luces 1
  fill(255);
  rect(330, 340, 20, 20);
  fill(0);
  text('1', 337, 355);

  fill(255);
  rect(330, 365, 20, 20);
  fill(0);
  text('X', 337, 380);
  //botones luces 2
  fill(255);
  rect(360, 340, 20, 20);
  fill(0);
  text('2', 367, 355);

  fill(255);
  rect(360, 365, 20, 20);
  fill(0);
  text('X', 367, 380);
  //botones luces 3
  fill(255);
  rect(390, 340, 20, 20);
  fill(0);
  text('3', 397, 355);

  fill(255);
  rect(390, 365, 20, 20);
  fill(0);
  text('X', 397, 380);

  stroke(1);

  //colores luces
  fill(255);
  rect(420, 310, 70, 80);
  fill(0);
  text('colores', 435, 320);

  //botones color luces
  fill(7, 237, 251);
  rect(425, 330, 20, 20);

  fill(36, 251, 7);
  rect(460, 330, 20, 20);

  fill(255, 41, 41);
  rect(425, 355, 20, 20);

  colram1 = random(0, 255);
  colram2 = random(0, 255);
  colram3 = random(0, 255);
  fill(colram1, colram2, colram3);
  rect(460, 355, 20, 20);


  //sección control sección imagenes
  //botones selección imagen 
  fill(255);
  text('imágenes', 320, 410);
  rect(320, 420, 20, 20);
  rect(360, 420, 20, 20);
  rect(400, 420, 20, 20);
  rect(440, 420, 20, 20);


  if (mouseIsPressed == true) {



    // selección de canción 
    if (mouseX > 20 && mouseX < 40 && mouseY > 340 &&
      mouseY < 360) {
      musica = 1;
    }

    if (mouseX > 60 && mouseX < 80 && mouseY > 340 &&
      mouseY < 360) {
      musica = 2;
    }

    if (mouseX > 100 && mouseX < 120 && mouseY > 340 &&
      mouseY < 360) {
      musica = 3;
    }

    //condición para selección de 1 canción
    if (musica == 1) {

      //condición para el boton de play
      if (mouseX > 20 && mouseX < 60 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica1.isPlaying() == false) {
          mimusica1.play();

        }
      }
      //condición para el boton de pausa
      if (mouseX > 90 && mouseX < 150 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica1.isPlaying() == true) {
          mimusica1.pause();
        }
      }
      //condición para le boton de cue 
      if (mouseX > 20 && mouseX < 60 && mouseY > 420 &&
        mouseY < 460) {

        if (mimusica1.isPlaying() == true) {
          mimusica1.jump(0);
        }
      }
    }
    //condiciones para selección canción 2
    if (musica == 2) {
      //condición para el boton de play
      if (mouseX > 20 && mouseX < 60 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica2.isPlaying() == false) {
          mimusica2.play();

        }
      }
      //condición para el boton de pausa
      if (mouseX > 90 && mouseX < 150 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica2.isPlaying() == true) {
          mimusica2.pause();
        }
      }
      //condición para le boton de cue 
      if (mouseX > 20 && mouseX < 60 && mouseY > 420 &&
        mouseY < 460) {

        if (mimusica2.isPlaying() == true) {
          mimusica2.jump(0);
        }
      }
    }

    //condiciones para selección canción 3
    if (musica == 3) {
      //condición para el boton de play
      if (mouseX > 20 && mouseX < 60 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica3.isPlaying() == false) {
          mimusica3.play();

        }
      }
      //condición para el boton de pausa
      if (mouseX > 90 && mouseX < 150 && mouseY > 460 &&
        mouseY < 490) {

        if (mimusica3.isPlaying() == true) {
          mimusica3.pause();
        }
      }
      //condición para le boton de cue 
      if (mouseX > 20 && mouseX < 60 && mouseY > 420 &&
        mouseY < 460) {

        if (mimusica3.isPlaying() == true) {
          mimusica3.jump(0);
        }
      }
    }

    // condiciones para botones control de encendido luces
    if (mouseX > 330 && mouseX < 350 && mouseY > 340 &&
      mouseY < 360) {
      luzen1 = 1;
    }
    if (mouseX > 330 && mouseX < 350 && mouseY > 365 &&
      mouseY < 385) {
      luzen1 = 0;
    }
    //condiciones para control de encendido luces
    //luces 1
    if (luzen1 == 0) {
      on1 = 0;
    }
    if (luzen1 == 1) {
      on1 = 255 - nivel * 200;
    }

    if (mouseX > 360 && mouseX < 380 && mouseY > 340 &&
      mouseY < 360) {
      luzen2 = 1;
    }
    if (mouseX > 360 && mouseX < 380 && mouseY > 365 &&
      mouseY < 385) {
      luzen2 = 0;
    }
    //condiciones para control de encendido luces
    //luces 2
    if (luzen2 == 0) {
      on2 = 0;
    }
    if (luzen2 == 1) {
      on2 = 255 - nivel * 200;
    }

    if (mouseX > 390 && mouseX < 410 && mouseY > 340 &&
      mouseY < 360) {
      luzen3 = 1;
    }
    if (mouseX > 390 && mouseX < 410 && mouseY > 365 &&
      mouseY < 385) {
      luzen3 = 0;
    }
    //condiciones para control de encendido luces
    //luces 3
    if (luzen3 == 0) {
      on3 = 0;
    }
    if (luzen3 == 1) {
      on3 = 150;

    }

    //condiciones para control de color luces
    //color 1
    if (mouseX > 425 && mouseX < 445 && mouseY > 330 &&
      mouseY < 350) {
      colsel = 1;
    }

    if (mouseX > 460 && mouseX < 480 && mouseY > 330 &&
      mouseY < 350) {
      colsel = 2;
    }

    if (mouseX > 425 && mouseX < 445 && mouseY > 355 &&
      mouseY < 375) {
      colsel = 3;
    }

    if (mouseX > 455 && mouseX < 475 && mouseY > 355 &&
      mouseY < 375) {
      colsel = 4;
    }

    if (colsel == 0) {
      colu11 = 255;
      colu12 = 255;
      colu13 = 255;
    }
    if (colsel == 1) {
      colu11 = 7;
      colu12 = 237;
      colu13 = 251;
    }
    if (colsel == 2) {
      colu11 = 36;
      colu12 = 251;
      colu13 = 7;
    }
    if (colsel == 3) {
      colu11 = 255;
      colu12 = 41;
      colu13 = 41;
    }
    if (colsel == 4) {
      colu11 = colram1;
      colu12 = colram2;
      colu13 = colram3;
    }
  }

  //poner condición para mover cabezas móviles 
  if (mouseX > 250 && mouseY < 300) {
    posxlu = mouseX;
    posylu = mouseY;
  }
  if (mouseX < 250 && mouseY > 280) {
    posxlu = 250;
    posxlu = 200;
  }


  if (mouseX < 250 && mouseY < 300) {
    posx1lu = mouseX;
    posy1lu = mouseY;
  }
  if (mouseX > 250 && mouseY > 280) {
    posx1lu = 250;
    posx1lu = 200;
  }


  //condición para boton disminución de volumen
  if (mouseX > 180 && mouseX < 200 && mouseY > 340 &&
    mouseY < 360) {
    volumen = volumen - 1;

  }
  if (volumen <= 0) {
    volumen = 0;
  }
  //condición para el boton aumento de volumen
  if (mouseX > 220 && mouseX < 240 && mouseY > 340 &&
    mouseY < 360) {
    volumen = volumen + 1;

    if (volumen >= 74) {
      volumen = 74;
    }
  }
  //condición para el paneo
  if (mouseX > 180 && mouseX < 200 && mouseY > 420 &&
    mouseY < 440) {
    paneo = paneo - 0.01;

    if (paneo <= -1) {
      paneo = -1;
    }
  }
  if (mouseX > 220 && mouseX < 240 && mouseY > 420 &&
    mouseY < 440) {
    paneo = paneo + 0.01;
    if (paneo >= 1) {
      paneo = 1;
    }

  }
  //limitador de canciones para evotar que se sobre pongan
  if (mimusica1.isPlaying() == true) {
    mimusica2.stop();
    mimusica3.stop();
  }
  if (mimusica2.isPlaying() == true) {
    mimusica1.stop();
    mimusica3.stop();
  }
  if (mimusica3.isPlaying() == true) {
    mimusica1.stop();
    mimusica2.stop();
  }


}