function setup() {
  createCanvas(600, 600);
}

function draw() {
   background (248,249,191,5)
	
	
	//triangulo
	noFill()
	stroke(232,145,50)
	ellipse(300,85,80,80)
	
	stroke(251,213,76)
	ellipse(300,85,50,50)
	
	fill(0)
	ellipse(300,85,20,20)
	
	fill(230,165,65)
	noStroke()
	triangle(75,170,260,20,360,170)
	
	fill(100,124,64)
	quad(260,20,360,170,285,170,240,36)
  
  fill(255)
  arc(302,84,15,15,0.9,4.2)
	
	//circulo en paralelas
	noStroke()
	fill(225,168,201)
	ellipse(350,385,80,80)
	
	//continuación triangulo
	stroke(0)
	line(228,0,428,600)
	
	fill(122,144,202)
	ellipse(240,90,70,70)
	
	fill(251,247,238)
	ellipse(240,90,60,60)
	
	fill(0)
	ellipse(245,88,10,10)
	
	fill(248,122,74)
	triangle(160,50,225,80,150,60)
	
	fill(252,221,69)
	triangle(260,110,375,225,350,235)
  
  fill(253,111,61)
  triangle(260,110,276,133,300,150)
  
  fill(255)
  quad(280,130,300,150,292,154,276,133)
  strokeWeight(2)
  line(290,140,285,143)
  line(295,145,288,149)
  
	strokeWeight(1)
  fill(255)
  triangle(255,28,280,29,300,0)
	fill(0)
	triangle(255,75,305,0,325,0)
  fill(255)
  triangle(255,25,280,10,300,0)
	
	//semi circulos sup
	noFill()
	stroke(248,170,121)
	strokeWeight(3)
	arc(138,49,60,60,2.5,5.65)
	
	stroke(216,106,83)
	arc(186,14,60,60,2.5,5.65)
	
	stroke(0)
	strokeWeight(1)
	arc(140,50,60,60,2.5,5.65)
	
	stroke(0)
	arc(188,16,60,60,2.5,5.65)
	line(135,20,160,0)
	line(115,65,190,0)
	//triangulos laterales + cuadrados
	
	stroke(234,122,102)
	line(327,0,600,422)
	
	stroke(0)
	line(325,0,600,425)
	line(357,50,427,9)

	
	fill(0)
	quad(332,12,355,0,369,22,347,33)
	quad(369,22,390,10,400,26,380,38)
	
	fill(47,47,39)
	quad(369,22,390,10,400,26,380,38)
	
	fill(201,130,52)
	triangle(380,38,400,26,550,300)
	triangle(400,26,420,14,535,245)
	triangle(430,0,445,0,550,225)
	
	fill(0)
	triangle(383,0,390,10,408,0)
	
	fill(89,169,222,200)
  noStroke()
	ellipse(430,55,100,100,110)
  
	stroke(0)
	fill(0)
	quad(360,110,600,180,600,190,355,115)
	
	stroke(208,129,124)
	strokeWeight(2)
	line(550,24,600,24)
	line(550,49,600,49)
	line(550,74,600,74)
	
	stroke(0)
	strokeWeight(1)
	line(550,25,600,25)
	line(550,50,600,50)
	line(550,75,600,75)
	//barras sección superior
	
	fill(0)
	quad(0,195,160,165,163,170,0,200)
	
	noFill()
	quad(0,225,120,190,125,195,0,230)
	
	//parte central
	stroke(208,155,151)
	strokeWeight(3)
	arc(-38,300,120,120,PI,TWO_PI)
	
	stroke(192,163,43)
	arc(82,300,120,120,PI,TWO_PI)
	
	stroke(212,164,142)
	arc(322,300,120,120,PI,TWO_PI)
	
	stroke(0)
	strokeWeight(1)
	arc(-40,300,120,120,PI,TWO_PI)
	arc(80,300,120,120,PI,TWO_PI)
	
	stroke(229,108,53)
	strokeWeight(3)
	arc(200,300,120,120,PI,TWO_PI)
	
	stroke(0)
	strokeWeight(1)
	arc(320,300,120,120,PI,TWO_PI)
	
	stroke(193,114,120)
	strokeWeight(2)
	line(0,299,500,299)
	
	stroke(0)
	strokeWeight(1)
	line(0,300,500,300)
	
	stroke(197,154,122)
	strokeWeight(3)
	arc(22,360,120,120,PI,TWO_PI)
	
	stroke(203,173,162)
	arc(142,360,120,120,PI,TWO_PI)
	
	stroke(217,204,187)
	arc(202,420,120,120,PI,TWO_PI)
	
	stroke(220,211,156)
	arc(262,480,120,120,PI,TWO_PI)
	
	stroke(141,121,94,12)
	line(137,255,137,600)
	
	stroke(0)
	strokeWeight(1)
	arc(20,360,120,120,PI,TWO_PI)
	arc(140,360,120,120,PI,TWO_PI)
	arc(200,420,120,120,PI,TWO_PI)	
	arc(260,480,120,120,PI,TWO_PI)
	line(135,255,135,600)
	//barra central
	
	quad(50,360,510,0,530,0,60,370)
	
	fill(0)
	quad(50,360,76,340,85,350,60,370)
	
	fill(174,146,109)
	quad(100,322,380,103,390,110,110,330)
	
	fill(0)
	quad(475,28,510,0,530,0,480,40)
	
	fill(252,106,57)
	quad(250,204,386,97,394,106,260,213)
	
	line(106,317,115,325)
	line(110,313,120,320)
	line(115,309,126,316)
	line(121,306,133,313)
	line(128,301,139,307)
	line(134,296,144,302)
	//lineas 
	line(75,385,185,270)
	line(80,388,215,247)
	line(85,391,245,223)
	line(100,475,250,310)
	line(105,478,254,315)
	line(110,481,258,320)
	line(240,350,240,375)
	
	//triangulo+circulo+cuadrado
	noStroke()
	fill(201,197,134)
	ellipse(515,465,130,130)
	
	fill(254,204,83,120)
	triangle(500,300,530,430,420,400)
	
	stroke(218,168,179)
	strokeWeight(2)
	line(250,379,465,379)
	line(325,459,480,459)
	
	stroke(0)
	strokeWeight(1)
	line(250,380,465,380)
	line(325,460,480,460)
	
	fill(216,110,62)
	rect(575,490,40,40)
	line(595,510,600,510)
	line(595,515,600,515)

	//más lineas
	line(255,180,500,445)	
	line(25,35,100,0)
	line(0,110,75,0)
	line(0,175,45,0)
	line(0,80,130,200)
	
}