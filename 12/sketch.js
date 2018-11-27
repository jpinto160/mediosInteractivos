var estado = 0;
//estado 0=introducción
//estado 1= instrucciones
//estado 2= instrucciones multijugador
//estado 3= juego solo
//estado 4= juego multijugador
//estado 5= perdió
//variables necesarias para guardar datos del juego

var timerpun = 0;
var finalscore;
var bestscore = 0;
var timerback = 5;
var timerbackmul = 5;
var timebacki = 10000;
var abeja;
var abejamul;
var abejamula;
var barra = [];
var tampa = 30;
var velau = 0;
var mic;
var vol;
var h;
var velbar;
var numcon;

var capture;
var tracker;
var trackerb;
var canvas;
var posyb;
var posyc;
var ganador;
var sispun;

//sección de carga de imagenes y audio
function preload() {
  music01 = loadSound('assets/music01.mp3');
  back = loadImage('assets/back.png');
  bambu = loadImage('assets/bambu.png');
  abejai = loadImage('assets/abeja.png');
  abejac = loadImage('assets/ABEJAC.png');
  recurso = loadImage('assets/recurso.png');
  logo = loadImage('assets/logo.png');
  bjuego = loadImage('assets/JUGAR.png');
  bmulti = loadImage('assets/MULTI.png');
  reint = loadImage('assets/REINTENTAR.png');
  over = loadImage('assets/GAME OVER.png');
  logoabeja = loadImage('assets/logoabeja.png');
}

function setup() {
  //canvas que se adapta a la pantalla del dispositivo
  createCanvas(windowWidth, windowHeight);
  //se crean abejas y se enciende el micrófono
  abeja = new abejita();
  abejamul = new abejitamul();
  abejamula = new abejitamula();
  mic = new p5.AudioIn();
  mic.start();
  //sección de carga y captura de video
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.parent('container');
  activarTracking();
}
//sección donde se dibuja todo
function draw() {
  //fondo para todas las secciones del juego
  background(back);
  //image(capture, 0,0,200,200);
  //estado de introducción
  if (estado == 0) {
    textSize(50);
    fill(255);
    image(logo, windowWidth / 2 - 100, (windowHeight / 2) - 200, 200, 150);
    image(bjuego, windowWidth / 2 - 100, (windowHeight / 2) + 100, 200, 80);
    image(bmulti, windowWidth / 2 - 100, (windowHeight / 2) + 170, 200, 80);
    //condición para comprobar si la música está en pausa, para reproducirla
    if (music01.isPlaying() == false) {
      music01.play();
      loop();
    }
    //estado 1 = instrucciones
  } else if (estado == 1) {
    //contador que limita el tiempo de permanencia en esta sección
    //tiene como max 5 seg antes de que empiece el juego
    if (frameCount % 20 == 5) {
      timerback = timerback - 1;
    }
    fill(0);
    text(timerback, width / 2, height / 2, 100);
    textSize(20);
    textStyle(BOLD);
    image(recurso, windowWidth / 2 - 80, windowHeight / 2 - 150, 140, 240);
    text('JUEGA GRITANDO', windowWidth / 2 - 135, windowHeight / 2 + 200);

    //condición que permite el cambio de estado cuando el contador llega a 0 
    if (timerback == 0) {
      estado = 3;
    }
    //instrucciones multijugador
  } else if (estado == 2) {
    //contador que limita el tiempo de permanencia en esta sección
    //tiene como max 5 seg antes de que empiece el juego
    if (frameCount % 20 == 5) {
      timerbackmul = timerbackmul - 1;
    }
    fill(0);
    text(timerbackmul, 100, height / 2, 100);
    textSize(20);
    textStyle(BOLD);
    image(logoabeja, windowWidth / 2 - 80, windowHeight / 2 - 150, 180, 240);
    text('CADA JUGADOR JUEGA CON LAS TARJETAS DE COLORES', windowWidth / 2 - 225, windowHeight / 2 + 200);
    text('sube y baja la tarjeta para controlar a la abeja', windowWidth / 2 - 225, windowHeight / 2 + 240);

    //condición que permite el cambio de estado cuando el contador llega a 0 
    if (timerbackmul == 0) {
      estado = 4;
    }

    //cambio de estado a estado de juego SOLO 
  } else if (estado == 3) {
    sispun = 1;
    timerback = 5;
    velbar = 2;
    // se enciende el microfono
    //se obtiene el nivel para reducir su entrada
    vol = mic.getLevel();
    //se toman valores enteros y se ajustan a una medida entre 1 y 10 
    h = floor(map(vol, 0, 1, 1, 10));
    //text(h,100,100);
    //condición para limitar la entrada de audio para que funcione el juego
    if (h > 4 && h < 8) {
      abeja.subirp();
    }

    //condición para comprobar si el audio está sonando y ponerle pausa y devolverlo a su inicioo
    if (music01.isPlaying() == true) {
      music01.jump(0);
    }
    //condición para crear barras cada cierto tiempo
    if (frameCount % 80 == 20) {
      barra.push(new barras());
      timerpun = timerpun + 1;
    }
    //condición para el sistema de puntos
    if (timerpun % 20 == 20) {
      velau = velau + 1;
    }
    //condición para puntaje final y mejor puntaje
    finalscore = timerpun;
    if (timerpun > bestscore) {
      bestscore = finalscore;
    }
    //condición para lograr que cuando la abeja toque las barras se pierda
    for (var i = 0; i < barra.length; i = i + 1) {
      barra[i].dibujarseb();
      barra[i].moverseb();
      if (barra[i].x > (width / 4) && barra[i].x < width / 4 + 20) {
        if (barra[i].altot >= abeja.y) {
          estado = 5;
          barra[i].perderb();

        }
        if (height - barra[i].altob <= abeja.y) {
          estado = 5;
          barra[i].perderb();
        }
      }
      text(timerpun, 100, 100);
      abeja.dibujarsep();

    }
    abeja.moversep();
    
    //estado 4 - juego multijugador
  } else if (estado == 4) {
    sispun = 2;
    timerbackmul = 5;
    velbar = 6;
    //condición para comprobar si el audio está sonando y ponerle pausa y devolverlo a su inicioo
    //if (music01.isPlaying()==true){
    //music01.jump(0);
    //}
    //condición para crear barras cada cierto tiempo
    if (frameCount % 10 == 2) {
      barra.push(new barras());
      timerpun = timerpun + 1;
    }
    //condición para el sistema de puntos
    if (timerpun % 20 == 20) {
      velau = velau + 1;
    }
    //condición para puntaje final y mejor puntaje
    finalscore = timerpun;
    if (timerpun > bestscore) {
      bestscore = finalscore;
    }
    //condición para lograr que cuando la abeja toque las barras se pierda
    for (var i2 = 0; i2 < barra.length; i2 = i2 + 1) {
      barra[i2].dibujarseb();
      barra[i2].moverseb();

      if (barra[i2].x > (width / 4) && barra[i2].x < width / 4 + 20) {
        if (barra[i2].altot >= abejamul.y) {
          estado = 5;
          barra[i2].perderb();
          ganador = 1;
        }
        if (height - barra[i2].altob <= abejamul.y) {
          estado = 5;
          barra[i2].perderb();
          ganador = 1;
        }
      }

      if (barra[i2].x > (width / 4) && barra[i2].x < width / 4 + 20) {
        if (barra[i2].altot >= abejamula.y) {
          estado = 5;
          barra[i2].perderb();
          ganador = 2;
        }
        if (height - barra[i2].altob <= abejamula.y) {
          estado = 5;
          barra[i2].perderb();
          ganador = 2;
        }
      }
			//se dibujan dos nuevas abejas
      text(timerpun, 100, 100);
      abejamul.dibujarsepmul();
      abejamula.dibujarsepmula();
    }
		//se da movimiento a las dos abejas creadas
    abejamul.moversepmul();
    abejamula.moversepmula();
    //estado 5 - perdió 
  } else if (estado == 5) {
		//condición para mostrar puntaje en modo de juego solo
    if (sispun == 1) {
      image(over, windowWidth / 2 - 140, (windowHeight / 2) - 200, 300, 160);
      //text('perdiste', windowWidth / 2 - 100, windowHeight / 2 - 40);
      abeja.perder();
      textSize(25);
      text('Puntaje final:  ' + finalscore, windowWidth / 2 - 150, windowHeight / 2 + 270);
      text('Mejor puntaje: ' + bestscore, windowWidth / 2 - 150, windowHeight / 2 + 300);
      image(reint, windowWidth / 2 - 100, (windowHeight / 2) + 100, 200, 80);
    }
    //condición para mostrar puntaje en modo de juego multijugador
    if (sispun == 2) {
      image(over, windowWidth / 2 - 140, (windowHeight / 2) - 200, 300, 160);
      //text('perdiste', windowWidth / 2 - 100, windowHeight / 2 - 40);
      abejamul.perdermul();
      abejamula.perdermula();
      //condición para mostrar que ganó el jugador 1 (cyan)
      if (ganador == 1) {
        textSize(25);
        text('El ganador es el jugador de color azul', windowWidth / 2 - 180, windowHeight / 2 + 270);
      }
      //condición para mostrar que ganó el jugador 2 (magenta)
      if (ganador == 2) {
        textSize(25);
        text('El ganador es el jugador de color magenta', windowWidth / 2 - 180, windowHeight / 2 + 270);
      }
      image(reint, windowWidth / 2 - 100, (windowHeight / 2) + 100, 200, 80);
    }
		//condición para borrar las barras de juegos anteriores
    for (var ir = 0; ir < barra.length; ir = ir + 1) {
      barra.splice(0, barra.length);
    }
  }
}

//función de abeja, Creación-movimiento.
function abejita() {
  this.x = width / 4;

  this.y = height / 2;
  this.velo = 0.4;
  this.fuer = -3;
  this.grave = 0.8;

  this.dibujarsep = function() {
    fill(255);
    image(abejai, this.x, this.y, tampa, tampa);
    //ellipse(this.x, this.y, tampa, tampa);

  }
  this.moversep = function() {
    this.velo = this.velo + this.grave;
    this.velo = this.velo * 0.9;
    this.y = this.y + this.velo;
    if (this.y > height) {
      this.y = height - 20;
      this.velo = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velo = 0;
      //}
    }
    this.subirp = function() {
      this.velo = (this.velo + this.fuer);

    }
    this.perder = function() {
      this.y = height / 2;
    }
  }
}
//función para las barras, creación-movimiento
function barras() {
  this.altot = random(0, (height / 2) - 30);
  this.altob = random(0, (height / 2) - 20);
  this.x = width;
  this.velb = velbar;
	
  this.dibujarseb = function() {
    fill(0);
    image(bambu, this.x, height - this.altob, 20, this.altob);
    image(bambu, this.x, 0, 20, this.altot);
    //rect(this.x, height - this.altob, 20, this.altob);
    //rect(this.x, 0, 20, this.altot);
  }
  this.moverseb = function() {
    this.x = this.x - this.velb - velau;
  }
  this.perderb = function() {

    timerpun = 0;
  }
}
//función para que al soltar el mouse sirvan las distintas funciones de los botones 
function mouseReleased() {

  if (estado == 0) {
    if (mouseX > windowWidth / 2 - 150 && mouseX < windowWidth / 2 + 170 &&
      mouseY > (windowHeight / 2) + 100 && mouseY < (windowHeight / 2) + 140) {
      estado = 1;
    }
    if (mouseX > windowWidth / 2 - 150 && mouseX < windowWidth / 2 + 170 &&
      mouseY > (windowHeight / 2) + 170 && mouseY < (windowHeight / 2) + 210) {
      estado = 2;
    }
  }
  if (estado == 5) {
    if (mouseX > windowWidth / 2 - 150 && mouseX < windowWidth / 2 + 170 &&
      mouseY > (windowHeight / 2) + 100 && mouseY < (windowHeight / 2) + 140) {
      estado = 0;
    }
  }
}
//función para trackear los colores en el video
function activarTracking() {

  tracker = new tracking.ColorTracker(['cyan']);
  trackerb = new tracking.ColorTracker(['magenta']);

  tracking.track('video', tracker);
  tracking.track('video', trackerb);


  tracker.on('track', function(event) {
    event.data.forEach(function(r) {
      posyb = r.y;
    })

    trackerb.on('track', function(event) {
      event.data.forEach(function(b) {
        posyc = b.y;
      })
    });
  });

}
//funciones para multijugador
//abeja color 1
function abejitamul() {
  this.x = width / 4;
  this.y = (height / 2) + 20;

  this.dibujarsepmul = function() {
    fill(255);
    image(abejai, this.x, this.y, tampa, tampa);

  }
  this.moversepmul = function() {
    this.y = posyc;
  }
  this.perdermul = function() {
    this.y = height / 2;
  }
}
//abeja color 2
function abejitamula() {
  this.x = width / 4;
  this.y = (height / 2) - 20;

  this.dibujarsepmula = function() {
    fill(255);
    image(abejac, this.x, this.y, tampa, tampa);

  }
  this.moversepmula = function() {
    this.y = posyb;
  }
  this.perdermula = function() {
    this.y = height / 2;
  }
}
