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
var friends = ["Michael", "Ivan", "Mercedes", "Jehnean","Cindy","Daniel","Jasmine"];
console.log(colorArray.length);

randomColor = Math.floor((Math.random()*11)+1);
randomFriends = Math.floor(Math.random()*7);
var order = randomFriends;
console.log(randomColor);


var boxPicker;
var difficulty=11;
var location;
$("#startMe").click(function() {
boxPicker = (Math.floor(Math.random()*difficulty)+1);
location = ("box"+boxPicker);
var myImage = $("<img>").attr("src","assets/images/image"+order+".png").attr("class","peek").attr("id","p1");
//var myOtherImage = $("<img>").attr("src","assets/images/image"+3+".png").attr("class","peek").attr("id","p2");
$("#box"+boxPicker).html(myImage);
//$("#box"+3).html(myOtherImage);
setTimeout(function() {$("#p1").hide();}, 500);
//setTimeout(function() {$("#p1").hide();}, 500);
setTimeout(function(){$("h1").html("Where is "+ friends[randomFriends]+"?");},500);

});




//insertBox();
function insertBox(){
	var box = $("<div>").attr("class", "emptyBox").attr("id", "box" + numberOfBoxes);
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

