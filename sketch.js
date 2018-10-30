var myTable
var poke1; var poke2; var poke3; var poke4; var poke5; var poke6;var poke7; var poke8;
var poke9; var poke10;var poke11; var poke12; var poke13; var poke14; var poke15; var poke16;
var poke17; var poke18;var poke19; var poke20
var pokeball;

function preload(){
  // put preload code here
  myTable= loadTable('assets/pokemonstats.csv', 'csv', 'header');
  poke1 = loadImage('./assets/1.png');
  poke2 = loadImage('./assets/2.png');
  poke3 = loadImage('./assets/3.png');
  poke4 = loadImage('./assets/4.png');
  poke5 = loadImage('./assets/5.png');
  poke6 = loadImage('./assets/6.png');
  poke7 = loadImage('./assets/7.png');
  poke8 = loadImage('./assets/8.png');
  poke9 = loadImage('./assets/9.png');
  poke10 = loadImage('./assets/10.png');
  poke11 = loadImage('./assets/11.png');
  poke12 = loadImage('./assets/12.png');
  poke13 = loadImage('./assets/13.png');
  poke14 = loadImage('./assets/14.png');
  poke15 = loadImage('./assets/15.png');
  poke16 = loadImage('./assets/16.png');
  poke17 = loadImage('./assets/17.png');
  poke18 = loadImage('./assets/18.png');
  poke19 = loadImage('./assets/19.png');
  poke20 = loadImage('./assets/20.png');

  pokeball= loadImage('./assets/pokeball.png');

}
var tableObject;
var selection;
var row;
var x
var y
var d;

//
var myPokemon= {};
var morePokemon = []

//img
//var pokePngs = [poke1 ,poke2,poke3,poke4,poke5,poke6,poke7,poke8,poke9,poke10,
//  poke11,poke12,poke13,poke14,poke15,poke16,poke17,poke18,poke19,poke20];
//console.log(pokePngs.length);
var pokeCount;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('blue');
  tableObject = myTable.getObject();
  //console.log(tableObject);

  for( var rowIndex in tableObject){
  row = tableObject[rowIndex];
  //console.log(row['Name']);
}

//selezione primi 5 pokemon
var quantiPokemon =20


for(i = 0; i<quantiPokemon; i ++){
selection= tableObject[i];
  //console.log(selection);
//posiziono orizzontalmente
x = map(i,0,20,100,width);


//altezza in base all'attacco
var attacco = tableObject[i];
//console.log(attacco['Attack']);
var attaccoN = attacco['Attack'] * 1;
//console.log(attaccoN);

y = map(attaccoN,0,100,height,0);
push();
stroke(255);
line(x,y,x,height-28);
pop();
//volevo farlo in un altro modo giuro ma non funzionava
if(i<1){var immagine= poke1};
if(i>=1){immagine= poke2};
if(i>=2){immagine= poke3};
if(i>=3){immagine= poke4};
if(i>=4){immagine= poke5};
if(i>=5){immagine= poke6};
if(i>=6){immagine= poke7};
if(i>=7){immagine= poke8};
if(i>=8){immagine= poke9};
if(i>=9){immagine= poke10};
if(i>=10){immagine= poke11};
if(i>=11){immagine= poke12};
if(i>=12){immagine= poke13};
if(i>=13){immagine= poke14};
if(i>=14){immagine= poke15};
if(i>=15){immagine= poke16};
if(i>=16){immagine= poke17};
if(i>=17){immagine= poke18};
if(i>=18){immagine= poke19};
if(i>=19){immagine= poke20};

myPokemon = new Pokemon (x,y, immagine);
morePokemon.push(myPokemon);


//ellipse(x,y,10);
}
fill('white');
text('Attack',25,height-50);
text('N Pokédex',25,height-25);

stroke(255);

line(40,height-75, 40, height-110);
line(35,height-105, 40, height-110);
line(45,height-105, 40, height-110)


line(95,height-28, width-20, height-28);
line(width-20, height-28, width-25,height-33);
line(width-20, height-28, width-25,height-23);



}

function draw() {
  // put drawing code here

  for(j=0; j<morePokemon.length; j++){
    morePokemon[j].display();

    var distx = morePokemon[j].x;
    var disty = morePokemon[j].y;
    //console.log(distx);

    morePokemon[j].d=dist(distx,disty, mouseX, mouseY);



  }

//myPokemon.display();



}
//mouse over
function Pokemon(_x,_y,_immagine,_d){
  this.x=_x;
  this.y=_y;
  //this.pokeCount= _pokeCount;
  this.d=_d;
  this.immagine=_immagine;





  this.display= function(){
    noStroke();
    fill('blue');
  if(this.d<30) {rect(this.x-35, this.y-35,70,70);
    image(this.immagine, this.x-30, this.y-25,60,50)
  }
  else {rect(this.x-35, this.y-35,70,70);
    image(pokeball, this.x -50, this.y -60,100,100) }



  //ellipse(this.x,this.y,30);
  }

}
