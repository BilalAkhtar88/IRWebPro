var ind = 1;
var startTime, endTime;
var diffTime;

function start(){
	startTime = new Date();
}

function end(){
	endTime = new Date();
    var diffTime = endTime - startTime;	
    //diffTime = diffTime/1000;
    var seconds = Math.round(diffTime);
    alert(diffTime.toString())
    //document.getElementById("demo").innerHTML = diffTime;
	document.getElementById("timer").innerHTML = diffTime;
}

start;