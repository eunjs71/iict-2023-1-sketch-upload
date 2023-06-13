let img_cube;
let img_dance;
let img_horse;
let img_name;
let cur_img;
let degree = 0;
let dpf;

function preload() {
  img_cube = loadImage("assets/cube.jpg");
  img_dance = loadImage("assets/dance.png");
  img_horse = loadImage("assets/horse.png");
}

function setup() {
  createCanvas(800, 400);
  img_name = "Cube";
  cur_img = img_cube;
  setupInput();
  imageMode(CENTER);
  dpf = 1;
}

function draw() {
  background(255);
  if (img_name === "Cube") {
    cur_img = img_cube;
  } else if (img_name === "Dance") {
    cur_img = img_dance;
  } else if (img_name === "Horse") {
    cur_img = img_horse;
  }
  push();

  degree += float(dpf);
  translate(400, 400);
  rotate(radians(degree));
  image(cur_img, 0, 0, 800, 800);
  pop();
}

function setupInput() {
  const input_img_cube = document.getElementById("Cube");
  const input_img_dance = document.getElementById("Dance");
  const input_img_horse = document.getElementById("Horse");
  input_img_cube.addEventListener("click", onClickInputImg);
  input_img_dance.addEventListener("click", onClickInputImg);
  input_img_horse.addEventListener("click", onClickInputImg);
  const input_dfp = document.getElementById("dpf");
  input_dfp.addEventListener("input", onInputDpf);
}

function onClickInputImg(e) {
  img_name = e.target.value;
  console.log(e.target.value);
}
function onInputDpf(e) {
  dpf = e.target.value;
  console.log(e.target.value);
  const dpf_label = document.getElementById("dfp_label");
  dpf_label.innerText = e.target.value;
}
