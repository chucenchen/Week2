let sentence1 = "During dinner, she told me she knew my deep dark secret";
let sentence2 = "As she chewed her burger, I knew she was bluffing";
let fade = 0;
let fadingIn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15);
  textAlign(CENTER, CENTER);
  fill(220);
  noStroke();
  text(sentence2, width / 2, height / 2);
}

function draw() {
  if (fadingIn) {
    fade += 5;
    if (fade >= 255) {
      fade = 255;
    }
  } else {
    fade -= 5;
    if (fade <= 0) {
      fade = 0;
    }
  }

  background(fade);
  fill(0);
  text(sentence2, width / 2, height / 2)

  if (fade === 0) {
    fill(220);
    text(sentence1, width / 2, height / 2);
  }
}

function mousePressed() {
  fadingIn = !fadingIn;
}