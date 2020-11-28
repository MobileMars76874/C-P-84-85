canvas =  document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var Background_Images = "racing.jpg";

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_X = 10;
car1_Y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_X = 10;
car2_Y = 100;

function add(){
background_imgtag = new Image();
background_imgtag.onload = background_load;
background_imgtag.src = Background_Images;

car1_imgtag = new Image();
car1_imgtag.onload = car1_load;
car1_imgtag.src = car1_image;

car2_imgtag = new Image();
car2_imgtag.onload = car2_load;
car2_imgtag.src = car2_image;
}

function background_load(){
ctx.drawImage(background_imgtag , 0 , 0 , canvas.width , canvas.height);
}

function car1_load(){
ctx.drawImage(car1_imgtag , car1_X , car1_Y , car1_width , car1_height);
}
function car2_load(){
ctx.drawImage(car2_imgtag , car2_X , car2_Y , car2_width , car2_height);
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e){
keypressed = e.keyCode;
console.log(keypressed);
if(keypressed == "37"){
console.log("left");
left();
}
if(keypressed == "38"){
console.log("up");
up();
}
if(keypressed == "39"){
console.log("right");
right();
}
if(keypressed == "40"){
console.log("down");
down();
}
if(keypressed == "87"){
console.log("car2_up");
car2_up();
}
if(keypressed == "65"){
console.log("car2_left");
car2_left();
}
if(keypressed == "68"){
console.log("car2_right");
car2_right();
}
if(keypressed == "83"){
console.log("car2_down");
car2_down();
}
if(car1_X > 700){
console.log("car1 Won")
document.getElementById('game_status').innerHTML ="Car 1 Won";
}
if(car2_X > 700){
console.log("car2 Won")
document.getElementById('game_status').innerHTML ="Car 2 Won";
}
}


function up(){
if(car1_Y >= 0){
car1_Y = car1_Y - 10;
console.log("car1 x position is:"+car1_X+","  +"car1 y position is:"+car1_Y);
background_load();
car1_load();
car2_load();
}
}

function down(){
if(car1_Y <= 500){
car1_Y = car1_Y + 10;
console.log("car1 x position is:"+car1_X+","  +"car1 y position is:"+car1_Y);
background_load();
car1_load();
car2_load();
}
}

function right(){
if(car1_X <=700){
car1_X = car1_X + 10;
console.log("car1 x position is:"+car1_X+","  +"car1 y position is:"+car1_Y);
background_load();
car1_load();
car2_load();
}
}

function left(){
if(car1_X >=0){
car1_X = car1_X - 10;
console.log("car1 x position is:"+car1_X+","  +"car1 y position is:"+car1_Y);
background_load();
car1_load();
car2_load();
}
}

function car2_up(){
 if(car2_Y >= 0){
car2_Y = car2_Y - 10;
console.log("car2 x position is:"+car2_X+","  +"car2 y position is:"+car2_Y);
background_load();
car2_load();
car1_load();
}
}

function car2_left(){
if(car2_X >=0){
car2_X = car2_X - 10;
console.log("car2 x position is:"+car2_X+","  +"car2 y position is:"+car2_Y);
background_load();
car2_load();
car1_load();
}
}

function car2_right(){
if(car2_X <=700){
car2_X = car2_X + 10;
console.log("car2 x position is:"+car2_X+","  +"car2 y position is:"+car2_Y);
background_load();
car2_load();
car1_load();
}
}

function car2_down(){
if(car2_Y <= 500){
car2_Y = car2_Y + 10;
console.log("car2 x position is:"+car2_X+","  +"car2 y position is:"+car2_Y);
background_load();
car2_load();
car1_load();
}
}
if(car1_X > 700){
console.log("car1 Won")
document.getElementById('game_status').innerHTML ="Car 1 Won";
}