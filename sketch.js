let images = [];
let labels = [
"Birth", 
"First steps", 
"First day of school", 
"Graduation", 
"First love", 
"Marriage", 
"Childbirth", 
"Formation of a family", 
"Children starting their own families", 
"Retirement",
"Loss of a loved one",
"Serious illness",
"Decease"
];

let numImages = 13;
let current_time = 0;
// let interval = 1000; // -> Removing interval 
let angle = 0;
let arc_per_second = 2 * Math.PI / numImages;
let radius;

// -> Adding button variable 
let button

function preload() {
  for (let i = 0; i < numImages; i++) {
    images.push(loadImage("images/image" + i + ".jpg"));
  }
}

function setup() {
  createCanvas(800, 600);
  // setInterval(change_image, interval); // -> Removing interval 
  radius = width / 4;

  // -> Creating a button
  button = createButton("Travel Through Time");
  button.position(width/2 - 60, 50); 
  button.style('background','linear-gradient(to bottom, #B6FFF1, #137B7D)');
  button.style('color', '#033E3F');
  button.style('border', '1px solid #033E3F');
  button.mousePressed(change_image);
}

function draw() {
  image(images[current_time], 0, 0, width, height);

  fill(255, 150);
  rect(0, 0, width, height);

  translate(width / 2, height / 2);
  stroke(0);
  noFill();
  strokeWeight(2);
  ellipse(0, 0, radius * 2);
  for (let i = 0; i < 13; i++) {
    let x = cos(angle + i * arc_per_second) * radius;
    let y = sin(angle + i * arc_per_second) * radius;
    let x2 = cos(angle + i * arc_per_second) * (radius - 10);
    let y2 = sin(angle + i * arc_per_second) * (radius - 10);
    line(x, y, x2, y2);
  }
  strokeWeight(4);
  let pointerX = cos(angle) * (radius - 30);
  let pointerY = sin(angle) * (radius - 30);
  line(0, 0, pointerX, pointerY);
  translate(-width / 2, -height / 2);
  
  strokeWeight(1);
  textAlign(CENTER, TOP);
  textSize(25);
  fill(0);
  text("Time Machine - A Person's Lifetime", width / 2, 10);

  textAlign(CENTER, TOP);
  textSize(20);
  fill(0);
  text(labels[current_time], width / 2, height - 30);
}

function change_image() {
  let rt; // -> Random time variable 

  do { 
    rt = floor(random(numImages)); // -> Select random index from images
  } while (rt === current_time); // - Different index than current index

  //   current_time = (current_time + 1) % numImages; -> Removing interval 
  current_time = rt;
  angle += arc_per_second;
}