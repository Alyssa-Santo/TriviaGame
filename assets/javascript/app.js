
$(document).ready(function() {

var current = 1;
var time = 10;
var e = 0;
var timerId = setInterval(function(){myTimer();}, 1000)

function moveForward(status) {

	if(status == 'wrong') {
		$('#message').html("Wrong!")
	}

	if(status == 'correct') {
		$('#message').html("Correct!")
	}

	if(status == 'timeout') {

		$("#message").html("Times up!");
	}

	setTimeout(wait,2000);
}

function wait(){
	$("#question"+ current).css("display", "none");
	current++;
	$("#question"+ current).css("display", "unset");
}


$(".answers button").click(function(){
	if( this.id == "correct"){
		moveForward('correct');
		e++;
	}
		else{
		moveForward('wrong');
	}	
		clearInterval(timerId);
		setTimeout(reset,1000);
});

function myTimer() {
	time--;
	$("#timeleft").html(time);
	if(time === 0){
		clearInterval(timerId);
		moveForward('timeout');
		setTimeout(reset,1000);
	}
}

function reset() {
	time = 10;
	timerId = setInterval(function(){myTimer();}, 1000);
	$("#message").html(" ");
	restart();
}

function restart() {
	if (current === 8) {
		clearInterval(timerId);
		alert("GAME OVER!");
		$("#message").html("Your Score is " + ((e / 8)*100) + "%");
		setTimeout(reload,5000);
	}
}

function reload() {
	document.location.reload();
}

// $("restartGame").click(function(){
// 	document.location.reload();

// });

}); //End document function