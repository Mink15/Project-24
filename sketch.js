const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron, rubber, hammer;
var sand1, sand2, sand3, sand4, sand5, sand6;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	plane = newPlane(600,height,1200,20)

	stone = newStone(700,320,100,100);
	iron = newIron(300,350);
	rubber = newRubber(900,450,70);
	hammer = newHammer(10,100);

	sand1 = newSand(505,450,10);
	sand2 = newSand(505,450,10);
	sand3 = newSand(505,450,10);
	sand4 = newSand(505,450,10);
	sand5 = newSand(505,450,10);
	sand6 = newSand(505,450,10);
	sand7 = newSand(505,450,10);
	sand8 = newSand(505,450,10);
	sand9 = newSand(505,450,10);
	sand10 = newSand(505,450,10);


}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  stone.display();
  plane.display();
  iron.display();
  rubber.display();

  hammer.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
}