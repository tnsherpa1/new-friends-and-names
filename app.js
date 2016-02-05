$(document).ready(function(){

function randomMargin(targetBox) {
  console.log("random margin called");
	var top = Math.floor(Math.random()*100);
	var left = Math.floor(Math.random()*100);
	var targetElement = $("#box" + targetBox);
	targetElement.css("margin-top",top+"px");
	targetElement.css("margin-left",left+"px");
}

var numberOfBoxes = 1;
var colorArray = ["red", "green", "blue", "grey","pink", "purple","yellow","orange", "skyblue","violet","Cyan","Maroon"];
var friends = [
"Michael", 
"Ivan", 
"Mercedes", 
"Jehnean",
"Cindy",
"Daniel",
"Jasmine",
"Ryder",
"Caleb",
"Lucca",
"Jessica",
"Anna",
"Monq",
"Vien",
"Al",
"Dan F.",
"Annabelle",
"Derek",
"Tak",
"Josh",
"Matt",
"Christina",
"Leslie",
"Tashi",
"Nidhi",
"Franchini",
"Will",
"Lena",
"Nich",
"Alex",
"Ben",
"Illias",
"Dani"];

//console.log(friends);
//console.log(colorArray.length);

randomColor = Math.floor((Math.random()*11)+1);
randomFriends = Math.floor((Math.random()*32)+1);
nonWdiFriends = Math.floor((Math.random()*10)+40);
var order = randomFriends;
console.log(order);

var boxArray = [];
var boxPicker;
var difficulty=10;
var location;
var newBoxId;
var arrayLength;
boxPicker = (Math.floor(Math.random()*(difficulty-1)+1));
location = ("box"+boxPicker);
$("#startMe").click(function() {
var myImage = $("<img>").attr("src","assets/images/image"+order+".png").attr("class","peek").attr("id","p1");
//make id and 3 random
//var myOtherImage = $("<img>").attr("src","assets/images/image"+nonWdiFriends+".jpg").attr("class","nonWdi").attr("id","nonWdiFriends");
$("#box"+boxPicker).html(myImage);
console.log(myImage);
//make 3 random
//$("#box"+boxPicker).html(myOtherImage);

/*------------insert snippet here */
boxArray.splice(boxPicker,1);
arrayLength = boxArray.length-1;
newRandomPick = Math.floor((Math.random()*arrayLength)+1);
newBoxId = boxArray[newRandomPick];
var myOtherImage = $("<img>").attr("src","assets/images/image"+nonWdiFriends+".jpg").attr("class","nonWdi").attr("id","nonWdiFriends");
console.log("new id is"+newBoxId);
$("#"+newBoxId).html(myOtherImage);
//alert(""+newBoxId);
console.log(myOtherImage);
/*--------------End Snippet Here*/
setTimeout(function() {$("#p1").hide();}, 1000);

//hide p2
setTimeout(function() {$("#nonWdiFriends").hide();}, 1000);
setTimeout(function(){$("h1").html("Where is "+ friends[randomFriends]+"?");},1000);



});




//insertBox();
function insertBox(){
	var box = $("<div>").attr("class", "emptyBox").attr("id", "box" + numberOfBoxes);
	boxArray.push("box"+numberOfBoxes);
	$(".container").append(box);
	randomMargin(numberOfBoxes);
	numberOfBoxes += 1;	
	$(".emptyBox").css("background-color",colorArray[randomColor]);
}

for(var a=0; a<difficulty; a++) {
	insertBox();
}

//Determine winnner
$(".emptyBox").click(function(){
	var answer = $(this).attr("id");
	console.log(location);
	console.log(answer);
	if(location === answer) {
		$("h1").html("Congratulations! You found me!");
		$("h1").css("color","green");
		setTimeout(function(){window.location=window.location.pathname},500);
	} else {
		$("h1").html("I am sorry. You couldn't find me");
		$("h1").css("color","red");
		setTimeout(function(){window.location=window.location.pathname},500);
	}







});




});

