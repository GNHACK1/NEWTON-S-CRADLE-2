const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var world, engine, canvas;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var mConstraint;

function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.4);
  engine = Engine.create();
  world = engine.world;

  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  var options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(340, 450, "#00b0ff");
  pendulum2 = new Pendulum(400, 450, "#e91e63");
  pendulum3 = new Pendulum(460, 450, "#ffc107");
  pendulum4 = new Pendulum(520, 450, "#e91e63");
  pendulum5 = new Pendulum(580, 450, "#00b0ff");

  sling1 = new Sling(pendulum1.body, { x: 340, y: 250 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 250 });
  sling3 = new Sling(pendulum3.body, { x: 460, y: 250 });
  sling4 = new Sling(pendulum4.body, { x: 520, y: 250 });
  sling5 = new Sling(pendulum5.body, { x: 580, y: 250 });
}

function draw() {
  background(0);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}


function mouseDragged() {

  if(mouseOver(pendulum1)){ Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY }); } 
  if(mouseOver(pendulum2)){ Matter.Body.setPosition(pendulum2.body, { x: mouseX, y: mouseY }); } 
  if(mouseOver(pendulum3)){ Matter.Body.setPosition(pendulum3.body, { x: mouseX, y: mouseY }); } 
  if(mouseOver(pendulum4)){ Matter.Body.setPosition(pendulum4.body, { x: mouseX, y: mouseY }); } 
  if(mouseOver(pendulum5)){ Matter.Body.setPosition(pendulum5.body, { x: mouseX, y: mouseY }); } 
 

  //Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
