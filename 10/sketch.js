var estado = 0;
//estado 0=introducción
//estado 1= instrucciones
//estado 2=juego
//estado 3=perdió
//variables necesarias para guardad datos del juego
var timerpun=0;
var finalscore;
var bestscore=0;
var timerback=5;
var timebacki=10000;
var abeja;
var barra = [];
var tampa = 30;
var velau=0;
var mic;
var vol;
var h;


//sección de carga de imagenes y audio
function preload() {
  music01= loadSound('assets/music01.mp3');
  back= loadImage('assets/back.png');
  bambu= loadImage('assets/bambu.png');
  abejai= loadImage('assets/abeja.png');
  mano= loadImage('assets/mano.png');
  logo= loadImage('assets/logo.png');
  bjuego= loadImage('assets/JUGAR.png');
  reint= loadImage('assets/REINTENTAR.png');
  over= loadImage('assets/GAME OVER.png');
}

function setup() {
//canvas que se adapta a la pantalla del dispositivo
  createCanvas(windowWidth, windowHeight);
  //se crea una abeja y se enciende el micrófono
  abeja = new abejita();
  mic = new p5.AudioIn();
  mic.start();
  background(back);
}
//sección donde se dibuja todo
function draw() {
  //fondo para todas las secciones del juego
  background(back);
  //estado de introducción
  if (estado == 0) {
    textSize(50);
    fill(255);
    image(logo,windowWidth/2-100,(windowHeight/2)-200,200,150);
    image(bjuego,windowWidth/2-100,(windowHeight/2)+100,200,80);
    //condición para comprobar si la msúica está en pausa, para reproducirla
    if (music01.isPlaying()==false){
    music01.play();
    loop();
    }
    //estado 1 = instrucciones
  } else if (estado==1){
    //contador que limita el tiempo de permanencia en esta sección
    //tiene como max 5 seg antes de que empiece el juego
    if (frameCount %80 ==50){
    timerback=timerback-1;
    }
    fill(0);
    text(timerback,width/2, height/2,100);
    textSize(20);
    textStyle(BOLD);
    image(mano,windowWidth/2-50, windowHeight/2-150, 120,240);
  	text('JUEGA APLAUDIENDO', windowWidth / 2 - 160, windowHeight / 2 +200);
   
    //condición que permite el cambio de estado cuando el contador llega a 0 
    if (timerback == 0){
    estado=2;
  }
    //cambio de estado a estado de juego 
	} else if (estado == 2) {
    timerback=5;
    // se enciende el microfono
    //se obtiene el nivel para reducir su entrada
		 vol = mic.getLevel();
    //se toman valores enteros y se ajustan a una medida entre 1 y 10 
  	 h= floor(map (vol,0,1,1,10));
		//text(h,100,100);
    //condición para limitar la entrada de audio para que funcione el juego
		if (h > 4 && h <8){
    abeja.subirp();
    }
    
    //condición para comprobar si el audio está sonando y ponerle pausa y devolverlo a su inicioo
   	if (music01.isPlaying()==true){
    music01.jump(0);
    }
    //condición para crear barras cada cierto tiempo
    if (frameCount % 80 == 20) {
      barra.push(new barras());
      timerpun= timerpun+1;
    }
    //condición para el sistema de puntos
    if (timerpun %20== 20){
    velau=velau+2;
    }
    //condición para puntaje final y mejor puntaje
		 finalscore=timerpun;
		 if (timerpun > bestscore){
   	 bestscore=finalscore;
    }
    //condición para lograr que cuando la abeja toque las barras se pierda
    for (var i = 0; i < barra.length; i = i + 1) {
      barra[i].dibujarseb();
      barra[i].moverseb();

      if (barra[i].x > (width / 4) && barra[i].x < width/4 + 20 ) {
        if (barra[i].altot >= abeja.y) {
          estado = 3;
          barra[i].perderb();
      		}
        if (height-barra[i].altob <= abeja.y ) {
          estado = 3;
          barra[i].perderb();
        }
      }
			text(timerpun,100,100);
      abeja.dibujarsep();
    
    }
    abeja.moversep();
    //estado 3 - perdió 
  } else if (estado == 3) {
    image(over,windowWidth/2-140,(windowHeight/2)-200,300,160);
    //text('perdiste', windowWidth / 2 - 100, windowHeight / 2 - 40);
    abeja.perder();
    textSize(25);
    text('Puntaje final:  '+ finalscore,windowWidth/2 -150,windowHeight/2+270);
    text('Mejor puntaje: '+ bestscore,windowWidth/2 -150 ,windowHeight/2+300);
    image(reint,windowWidth/2-100,(windowHeight/2)+100,200,80);
    
    for (var ir=0; ir < barra.length; ir= ir+1){
    		
      barra.splice(0,barra.length);
    
    }
    
  }
}
//condición para testear el funcionamiento del juego con la tecla "espacio"
//function keyPressed() {
  //if (key == ' ') {
   // pajaro.subirp();
  //}
//}
//función de abeja, Creación-movimiento.
function abejita() {
  this.x = width / 4;
  this.y = height / 2;
  this.velo = 0.4;
  this.fuer = -3;
  this.grave = 0.8;

  this.dibujarsep = function() {
    fill(255);
    image(abejai,this.x,this.y,tampa,tampa);
    //ellipse(this.x, this.y, tampa, tampa);

  }
  this.moversep = function() {
    this.velo = this.velo + this.grave;
    this.velo = this.velo * 0.9;
    this.y = this.y + this.velo;
    if (this.y > height) {
      this.y = height-20;
      this.velo = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velo = 0;
    }
  }
  this.subirp = function() {
    this.velo = (this.velo + this.fuer);

  }
  this.perder = function() {
    this.y=height/2;
  }
}
//función para las barras, creación-movimiento
function barras() {
  this.altot = random(0, (height / 2)-30);
  this.altob = random(0, (height / 2)-20);
  this.x = width;
  this.velb = 2;

  this.dibujarseb = function() {
    fill(0);
    image(bambu,this.x, height - this.altob, 20, this.altob);
    image(bambu,this.x, 0, 20, this.altot);
    //rect(this.x, height - this.altob, 20, this.altob);
    //rect(this.x, 0, 20, this.altot);
  }
  this.moverseb = function() {
    this.x = this.x - this.velb -velau;
  }
  this.perderb=function(){
    
  timerpun=0;
  }
}
//función para que al soltar el mouse sirvan las distintas funciones de los botones 
function mouseReleased() {
if (estado==2){
   abeja.subirp();
}
  
    if (estado==0){
   if (mouseX > windowWidth/2-150 && mouseX < windowWidth/2+170 && 
       mouseY > (windowHeight/2) + 100 && mouseY < (windowHeight/2)+140){
     estado=1;
  }
  }
  if (estado==3){
  if (mouseX > windowWidth/2-150 && mouseX < windowWidth/2+170 && 
       mouseY > (windowHeight/2) + 100 && mouseY < (windowHeight/2)+140){
     estado=0;
  }
  }
}
