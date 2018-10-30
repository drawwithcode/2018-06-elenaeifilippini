var myTable

function preload(){
  // put preload code here
  myTable= loadTable('assets/pokemonstats.csv', 'csv', 'header');

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



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  tableObject = myTable.getObject();
  //console.log(tableObject);

  for( var rowIndex in tableObject){
  row = tableObject[rowIndex];
  //console.log(row['Name']);
}

//selezione primi 5 pokemon
for(i = 0; i<10; i ++){
selection= tableObject[i];
  //console.log(selection);
//posiziono orizzontalmente
x = map(i,0,10,10,width);

//altezza in base all'attacco
var attacco = tableObject[i];
//console.log(attacco['Attack']);
var attaccoN = attacco['Attack'] * 1;
//console.log(attaccoN);

y = map(attaccoN,0,100,0, height);
//console.log(y);


myPokemon = new Pokemon (x,y);
morePokemon.push(myPokemon);


ellipse(x,y,10);
}





}

function draw() {
  // put drawing code here

  for(j=0; j<morePokemon.length; j++){
    morePokemon[j].display();

    var distx = morePokemon[j].x;
    var disty = morePokemon[j].y;
    console.log(distx);

    morePokemon[j].d=dist(distx,disty, mouseX, mouseY);


  }

//myPokemon.display();



}
//mouse over
function Pokemon(_x,_y,_d){
  this.x=_x;
  this.y=_y;
  this.d=_d;



  this.display= function(){
  if(this.d<200) {fill('red')} else {fill('yellow')}


  //fill('blue');
  ellipse(this.x,this.y,30);
  }

}
