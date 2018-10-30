var estado = 0;

var pajaro;
var barra = [];
var tampa = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pajaro = new pajarito();
}

function draw() {
  background(220);


  if (estado == 0) {
    textSize(50);
    fill(255);
    text('flappy', windowWidth / 2 - 150, windowHeight / 2 - 40);
  } else if (estado == 1) {


    if (frameCount % 80 == 20) {
      barra.push(new barras());
    }

    for (var i = 0; i < barra.length; i = i + 1) {
      barra[i].dibujarseb();
      barra[i].moverseb();

      if (barra[i].x > (width / 4) && barra[i].x < width/4 + 20 ) {
        if (barra[i].altot >= pajaro.y) {
          estado = 2;
      		}
        if (height-barra[i].altob <= pajaro.y ) {
          estado = 2;
        }
      }

      pajaro.dibujarsep();
    }
    pajaro.moversep();
  } else if (estado == 2) {
    text('perdiste', windowWidth / 2 - 150, windowHeight / 2 - 40);
  }
}

function keyPressed() {
  if (key == ' ') {
    pajaro.subirp();

  }
}

function pajarito() {
  this.x = width / 4;
  this.y = height / 2;
  this.velo = 0.5;
  this.fuer = -15;
  this.grave = 0.8;

  this.dibujarsep = function() {
    fill(255);
    ellipse(this.x, this.y, tampa, tampa);

  }
  this.moversep = function() {
    this.velo = this.velo + this.grave;
    this.velo = this.velo * 0.9;
    this.y = this.y + this.velo;
    if (this.y > height) {
      this.y = height;
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
    estado = 2;

  }
}

function barras() {
  this.altot = random(0, height / 2);
  this.altob = random(0, height / 2);
  this.x = width;
  this.velb = 2;

  this.dibujarseb = function() {
    fill(0);
    rect(this.x, height - this.altob, 20, this.altob);
    rect(this.x, 0, 20, this.altot);
  }
  this.moverseb = function() {
    this.x = this.x - this.velb;
  }

}
function mouseReleased() {
	if (estado==0){
    estado=1;
  }else if (estado==2){
  estado=1;
  }
  
  

}