function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(520, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  background(220);
  ellipse(70, 50, 100, 100); // draw a red circle
  rect(100, 100, 50, 50); // draw a rectangle
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
  tint_color = document.getElementById("color_name").value;
}