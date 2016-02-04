//loads when DOM is ready
$(document).ready(function(){

//function randomMargin, takeas a parameter
function randomMargin(targetBox) {
	//checks no of calls
  console.log("random margin called");
	var top = Math.floor(Math.random()*25);
	var left = Math.floor(Math.random()*900);
	//assigns targetBox as id
	var targetElement = $("#box" + targetBox);
	//adds css margin-top to to targetBox id
	targetElement.css("margin-top",top+"px");
	//adds css margin-left to targetBox id
	targetElement.css("margin-left",left+"px");
}

//declares variable numberOfBoxes
var numberOfBoxes = 1;
function insertBox(){
	var box = $("<div>").attr("class", "emptyBox").attr("id", "box" + numberOfBoxes);
	$(".container").append(box);
	randomMargin(numberOfBoxes);
	numberOfBoxes += 1;
}


insertBox();
insertBox();
insertBox();
insertBox();
insertBox();



//console.log(numberOfBoxes);
var marginLeft;
var marginTop;
var boxPicker;

/*boxPicker = (Math.floor(Math.random()*3)+1);
//console.log("this"+boxPicker);
//$("#box"+boxPicker).html("#p1");*/

/*$(".emptyBox").click(function(){
	marginLeft = $(this).css("margin-left");
	marginTop = $(this).css("margin-top");
	});*/
	//jQuery event listener that shows and hides images
$("#startMe").click(function() {
$("#p1").css("margin-left",marginLeft);
$("#p1").css("margin-top",marginTop);


boxPicker = (Math.floor(Math.random()*5)+1);
console.log("this"+boxPicker);
var myImage = $("<img>").attr("src","assets/images/panda1.jpg").attr("class","peek").attr("id","p1");
$("#box"+boxPicker).html(myImage);


//$("#p1").show();
setTimeout(function() { $("#p1").hide(); }, 800);
//setTimeout(function(){$("h1").prepend("Where am I?");},500);
});




//insertBox();












})

