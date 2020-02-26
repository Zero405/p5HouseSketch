function setup() {
  createCanvas(400, 450, WEBGL);
}

function draw() {
  background(255);
  
  
  //if mouseX is rotating then stop rotating Y
  //rotateX(mouseY * 0.01 * -1);
  rotateY(frameCount * 0.01 * -1);
  
  
  // Roof
  fill(150, 0, 0); // Roof color
  beginShape();
  vertex(-100, 0, 0);
  vertex(0, -100, 50);
  vertex(100, 0, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(-100, 0, 100);
  vertex(0, -100, 50);
  vertex(100, 0, 100);
  endShape(CLOSE);
  
  beginShape();
  vertex(100, 0, 0);
  vertex(0, -100, 50);
  vertex(100, 0, 100);
  endShape(CLOSE);
  
  beginShape();
  vertex(-100, 0, 0);
  vertex(0, -100, 50);
  vertex(-100, 0, 100);
  endShape(CLOSE);
  
  // House
  fill(0,191,255);  // House color
  beginShape();
  vertex(-100, 0, 0);
  vertex(100, 0, 0);
  vertex(100, 150, 0);
  vertex(-100, 150, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(-100, 0, 100);
  vertex(100, 0, 100);
  vertex(100, 150, 100);
  vertex(-100, 150, 100);
  endShape(CLOSE);
  
  beginShape();
  vertex(-100, 0, 0);
  vertex(100, 0, 0);
  vertex(100, 150, 0);
  vertex(-100, 150, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(-100, 0, 0);
  vertex(-100, 0, 100);
  vertex(-100, 150, 100);
  vertex(-100, 150, 0);
  endShape(CLOSE);
  
  beginShape();
  vertex(100, 0, 0);
  vertex(100, 0, 100);
  vertex(100, 150, 100);
  vertex(100, 150, 0);
  endShape(CLOSE);
  
  // Windows
  fill(255, 255, 255);  // Window color
  // Second floor left window
  beginShape();
  vertex(-75, 25, 101);
  vertex(-75, 50, 101);
  vertex(-25, 50, 101);
  vertex(-25, 25, 101);
  endShape(CLOSE);
  
  // First floor left window
  beginShape();
  vertex(-75, 100, 101);
  vertex(-75, 125, 101);
  vertex(-25, 125, 101);
  vertex(-25, 100, 101);
  endShape(CLOSE);
  
  
  // Second floor right window
  beginShape();
  vertex(75, 25, 101);
  vertex(75, 50, 101);
  vertex(25, 50, 101);
  vertex(25, 25, 101);
  endShape(CLOSE);
  
  // First floor right window
  beginShape();
  vertex(75, 100, 101);
  vertex(75, 125, 101);
  vertex(25, 125, 101);
  vertex(25, 100, 101);
  endShape(CLOSE);
  
  // door
  fill(139,69,19);
  beginShape();
  vertex(-15, 100, 101);
  vertex(15, 100, 101);
  vertex(15, 150, 101);
  vertex(-15, 150, 101);
  endShape(CLOSE);
  
  
  translate(-1, -1, -1);
  // Windows
  fill(255, 255, 255);  // Window color
  // Second floor left window
  beginShape();
  vertex(-75, 25, 0);
  vertex(-75, 50, 0);
  vertex(-25, 50, 0);
  vertex(-25, 25, 0);
  endShape(CLOSE);
  
  // First floor left window
  beginShape();
  vertex(-75, 100, 0);
  vertex(-75, 125, 0);
  vertex(-25, 125, 0);
  vertex(-25, 100, 0);
  endShape(CLOSE);
  
  
  // Second floor right window
  beginShape();
  vertex(75, 25, 0);
  vertex(75, 50, 0);
  vertex(25, 50, 0);
  vertex(25, 25, 0);
  endShape(CLOSE);
  
  // First floor right window
  beginShape();
  vertex(75, 100, 0);
  vertex(75, 125, 0);
  vertex(25, 125, 0);
  vertex(25, 100, 0);
  endShape(CLOSE);
  
  // door
  fill(139,69,19);
  beginShape();
  vertex(-15, 100, 0);
  vertex(15, 100, 0);
  vertex(15, 150, 0);
  vertex(-15, 150, 0);
  endShape(CLOSE);
  
  // Door knob
  fill(255,223,0);
  circle(-5, 125, 5);
  
  translate(100, -150, 0);
  sphere(30, 50, 50);
  
  
}