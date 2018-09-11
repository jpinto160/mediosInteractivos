//posición y común
var posxbot1 = 15;
var posybot1 = 30;
var posybot2 = 65;
var posybot3 = 100;
//tamaño de cada cada cuadrado
var tambot = 20;

//herramienta
var hersel = 1;
//sección de color
var colsel = 1;
//limpieza
var limpi = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  //rectangulos diferenciadores de sección 
  noStroke();
  fill(12, 250, 40);
  rect(0, 25, 400, 30);
  fill(255, 12, 50);
  rect(0, 60, 400, 30);
  fill(0);
  rect(0, 95, 100, 30);
  fill(255);
  stroke(1);
  // botones del 1 a 10
  //cuadrados 
  //posición en X aumenta de 30 en 30 
  //posición en y es igual a la variable posybot1
  rect(posxbot1, posybot1, tambot, tambot);
  rect(posxbot1 + 30, posybot1, tambot, tambot);
  rect(posxbot1 + 60, posybot1, tambot, tambot);
  rect(posxbot1 + 90, posybot1, tambot, tambot);
  rect(posxbot1 + 120, posybot1, tambot, tambot);
  rect(posxbot1 + 150, posybot1, tambot, tambot);
  rect(posxbot1 + 180, posybot1, tambot, tambot);
  rect(posxbot1 + 210, posybot1, tambot, tambot);
  rect(posxbot1 + 240, posybot1, tambot, tambot);
  rect(posxbot1 + 270, posybot1, tambot, tambot);
  //botones de 11 al 20
  //posición en X aumenta de 30 en 30
  //posición en Y cambia de variable (posybot1 a posybot2)
  rect(posxbot1, posybot2, tambot, tambot);
  rect(posxbot1 + 30, posybot2, tambot, tambot);
  rect(posxbot1 + 60, posybot2, tambot, tambot);
  rect(posxbot1 + 90, posybot2, tambot, tambot);
  rect(posxbot1 + 120, posybot2, tambot, tambot);
  rect(posxbot1 + 150, posybot2, tambot, tambot);
  rect(posxbot1 + 180, posybot2, tambot, tambot);
  rect(posxbot1 + 210, posybot2, tambot, tambot);
  rect(posxbot1 + 240, posybot2, tambot, tambot);
  rect(posxbot1 + 270, posybot2, tambot, tambot);
  //boton de clear
  rect(posxbot1, posybot3, tambot, tambot);
  //al pasar por encima de un boton este cambie de color
  //si el mouse pasa por cualquier cuadro de color este se pone de
  //dicho color
  //al quitarse vuelve al estado inicial (blanco)
  //SOLO TOMA LOS PRIMEROS 10 CUADROS CORRESPONDIENTES AL COLOR
  //se mantiene el mismo patron de código
  //solo cambia la posición en X según los rectangulos anteriormente creados
  //se modifica el color de relleno de cada cuadro
  //se re genera cada cuadro sobre el otro mientras el más pasa por encima
  if (mouseX > posxbot1 && mouseX < posxbot1 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(0);
    rect(posxbot1, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 30 && mouseX < posxbot1 + 30 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(41, 123, 192);
    rect(posxbot1 + 30, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 60 && mouseX < posxbot1 + 60 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(72, 252, 60);
    rect(posxbot1 + 60, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 90 && mouseX < posxbot1 + 90 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(252, 141, 60);
    rect(posxbot1 + 90, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 120 && mouseX < posxbot1 + 120 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(247, 16, 38);
    rect(posxbot1 + 120, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 150 && mouseX < posxbot1 + 150 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(27, 16, 247);
    rect(posxbot1 + 150, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 180 && mouseX < posxbot1 + 180 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(244, 247, 16);
    rect(posxbot1 + 180, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 210 && mouseX < posxbot1 + 210 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(239, 16, 247);
    rect(posxbot1 + 210, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 240 && mouseX < posxbot1 + 240 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(87, 247, 200);
    rect(posxbot1 + 240, posybot1, tambot, tambot);
  }
  if (mouseX > posxbot1 + 270 && mouseX < posxbot1 + 270 + tambot &&
    mouseY > posybot1 && mouseY < posybot1 + tambot) {
    fill(102, 36, 131);
    rect(posxbot1 + 270, posybot1, tambot, tambot);
  }
  //texto informativo 
  fill(255);
  textSize(18);
  text('color', 335, 45);
  text('tools', 335, 80);
  text('clear', 50, 115);
  //inicio condiciones para cambio de color y de selección de herramienta
  if (mouseIsPressed) {
    //condición para reinicia la pantalla
    if (limpi == 1) {
      background(255);
    }
    //selección de colores
    // color #1
    if (colsel == 1) {
      fill(0);
      //condición para anular el borde cuando se selecciona la 
      //herramienta 6 y 7
      //esto se repite a lo largo de cada color
      if (hersel == 6) {
        stroke(0);
      }
      if (hersel == 7) {
        stroke(0);
      }
      //operación para reiniciar la condición de limpieza
      //se le da el valor de 0
      limpi = 0;
    }
    //color #2
    if (colsel == 2) {
      fill(41, 123, 192);
      if (hersel == 6) {
        stroke(41, 123, 192);
      }
      if (hersel == 7) {
        stroke(41, 123, 192);
      }
      limpi = 0;
    }
    //color #3
    if (colsel == 3) {
      fill(72, 252, 60);
      if (hersel == 6) {
        stroke(72, 252, 60);
      }
      if (hersel == 7) {
        stroke(72, 252, 60);
      }
      limpi = 0;
    }
    //color #4
    if (colsel == 4) {
      fill(252, 141, 60);
      if (hersel == 6) {
        stroke(252, 141, 60);
      }
      if (hersel == 7) {
        stroke(252, 141, 60);
      }
      limpi = 0;
    }
    //color #5
    if (colsel == 5) {
      fill(247, 16, 38);
      if (hersel == 6) {
        stroke(247, 16, 38);
      }
      if (hersel == 7) {
        stroke(247, 16, 38);
      }
      limpi = 0;
    }
    //color #6
    if (colsel == 6) {
      fill(27, 16, 247);
      if (hersel == 6) {
        stroke(27, 16, 247);
      }
      if (hersel == 7) {
        stroke(27, 16, 247);
      }
      limpi = 0;
    }
    //color #7
    if (colsel == 7) {
      fill(244, 247, 16);
      if (hersel == 6) {
        stroke(244, 247, 16);
      }
      if (hersel == 7) {
        stroke(244, 247, 16);
      }
      limpi = 0;
    }
    //color #8
    if (colsel == 8) {
      fill(239, 16, 247);
      if (hersel == 6) {
        stroke(239, 16, 247);
      }
      if (hersel == 7) {
        stroke(239, 16, 247);
      }
      limpi = 0;
    }
    //color #9
    if (colsel == 9) {
      fill(87, 247, 200);
      if (hersel == 6) {
        stroke(87, 247, 200);
      }
      if (hersel == 7) {
        stroke(87, 247, 200);
      }
      limpi = 0;
    }
    //color #10
    if (colsel == 10) {
      fill(102, 36, 131);
      if (hersel == 6) {
        stroke(102, 36, 131);
      }
      if (hersel == 7) {
        stroke(102, 36, 131);
      }
      limpi = 0;
    }
    //condiciones para cambio de herramienta
    //herramienta #1
    if (hersel == 1) {
      ellipse(mouseX, mouseY, 20, 20);
      limpi = 0;
    }
    //herramienta #2
    if (hersel == 2) {
      rect(mouseX, mouseY, 20, 20);
      limpi = 0;
    }
    //herramienta #3
    if (hersel == 3) {
      triangle(mouseX, mouseY, mouseX - 2.5, mouseY - 5, mouseX + 5, mouseY);
      limpi = 0;
    }
    //herramienta #4
    if (hersel == 4) {
      line(mouseX, mouseY, mouseX + 10, mouseY + 10);
      limpi = 0;
    }
    //herramienta #5
    if (hersel == 5) {
      ellipse(mouseX, mouseY, 40, 10);
      limpi = 0;
    }
    //herramienta #6
    if (hersel == 6) {
      line(width / 2, height / 2, mouseX, mouseY);
      limpi = 0;
    }
    //herramienta #7
    if (hersel == 7) {
      line(mouseX, mouseY, mouseX + 15, mouseY + 15);
      line(mouseX + 15, mouseY, mouseX, mouseY + 15);
      limpi = 0;
    }
    //herramienta #8
    if (hersel == 8) {
      triangle(mouseX, mouseY, mouseX + 20, mouseY, mouseX + 10, mouseY - 10);
      rect(mouseX + 5, mouseY + 5, 10, 15);
      limpi = 0;
    }
    //herramienta #9
    if (hersel == 9) {
      rect(mouseX, mouseY, 10, 30);
      rect(mouseX - 10, mouseY + 10, 30, 10);
      limpi = 0;
    }
    //herramienta #19
    if (hersel == 10) {
      rect(mouseX, mouseY, 20, 20);
      rect(mouseX + 40, mouseY, 20, 20);
      rect(mouseX, mouseY + 40, 20, 20);
      rect(mouseX + 40, mouseY + 40, 20, 20);
      limpi = 0;
    }
    //selección limpieza
    if (mouseX > posxbot1 && mouseX < posxbot1 + tambot &&
      mouseY > posybot3 && mouseY < posybot3 + tambot) {
      limpi = 1;
    }
    //selección de colores
    //se mantienen los mismos patrones de código
    //cambia la posición en X
    //igual a la ubicación de cada rectangulo previamente creado
    //asignación de numero para la selección de color
    if (mouseX > posxbot1 && mouseX < posxbot1 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 1;
    }
    if (mouseX > posxbot1 + 30 && mouseX < posxbot1 + 30 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 2;
    }
    if (mouseX > posxbot1 + 60 && mouseX < posxbot1 + 60 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 3;
    }
    if (mouseX > posxbot1 + 90 && mouseX < posxbot1 + 90 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 4;
    }
    if (mouseX > posxbot1 + 120 && mouseX < posxbot1 + 120 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 5;
    }
    if (mouseX > posxbot1 + 150 && mouseX < posxbot1 + 150 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 6;
    }
    if (mouseX > posxbot1 + 180 && mouseX < posxbot1 + 180 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 7;
    }
    if (mouseX > posxbot1 + 210 && mouseX < posxbot1 + 210 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 8;
    }
    if (mouseX > posxbot1 + 240 && mouseX < posxbot1 + 240 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 9;
    }
    if (mouseX > posxbot1 + 270 && mouseX < posxbot1 + 270 + tambot &&
      mouseY > posybot1 && mouseY < posybot1 + tambot) {
      colsel = 10;
    }
    //selección de herramientas
    //se mantiene el mismo patron de código
    //cambia la posición el Y 
    //cambia la posición en X dependiendo de la ubicación de los
    //rectangulos previamente creados
    //asignación de numero para selección de herramienta
    if (mouseX > posxbot1 && mouseX < posxbot1 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 1;
    }
    if (mouseX > posxbot1 + 30 && mouseX < posxbot1 + 30 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 2;
    }
    if (mouseX > posxbot1 + 60 && mouseX < posxbot1 + 60 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 3;
    }
    if (mouseX > posxbot1 + 90 && mouseX < posxbot1 + 90 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 4;
    }
    if (mouseX > posxbot1 + 120 && mouseX < posxbot1 + 120 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 5;
    }
    if (mouseX > posxbot1 + 150 && mouseX < posxbot1 + 150 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 6;
    }
    if (mouseX > posxbot1 + 180 && mouseX < posxbot1 + 180 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 7;
    }
    if (mouseX > posxbot1 + 210 && mouseX < posxbot1 + 210 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 8;
    }
    if (mouseX > posxbot1 + 240 && mouseX < posxbot1 + 240 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 9;
    }
    if (mouseX > posxbot1 + 270 && mouseX < posxbot1 + 270 + tambot &&
      mouseY > posybot2 && mouseY < posybot2 + tambot) {
      hersel = 10;
    }
  }
}