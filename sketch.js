var capture;

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
  textFont('Helvetica');
  textSize(36);
  textAlign(CENTER);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  background(0,0,0);
}

function draw() {
  // put drawing code here


  var myColor = get(width / 2, height / 2);

  var vermelho = myColor.slice(0, 1);
  var verde = myColor.slice(1, 2);
  var azul = myColor.slice(2, 3);
  var somacor = vermelho+verde+azul;

  // fill(myColor);

  var myImage = capture.loadPixels();
  image(myImage, 0, 0, 1280, 960);
  noStroke();
  if (somacor < 606060) {
   // filter('GRAY');
   filter('THRESHOLD');
  }

  if (somacor > 606060) {
    fill('white');
    text('Show me darkness', width / 2, height / 1.1);
  }

  if (somacor < 606060) {
   fill('WHITE');
   text('Show me the light', width / 2, height / 1.1);

  }

  noFill();
  stroke(0, 0, 100);
  strokeWeight(4);
  ellipse(width / 2, height / 2, 75)

  // noStroke();
  // fill('white');
  // text(vermelho, width / 3, height / 3);
  // text(verde, width / 2, height / 3);
  // text(azul, width / 1.5, height / 3);
  // text(somacor, width / 1.5, height / 2.6);


}
