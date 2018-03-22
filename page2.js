var ind = 1;
var n1 = 0;
var n2 = 0;
var startTime, endTime;
var diffTime;

function start(){
	startTime = new Date();
	//n1 = startTime.getTime();
	//document.getElementById("timer").innerHTML = startTime.getTime();
	
}

function end(){
	endTime = new Date();
	//n2 = endTime.getTime();
    var diffTime = endTime - startTime ;	
    diffTime = diffTime / 1000;
    var seconds = Math.round(diffTime);
    //alert(diffTime)
    //document.getElementById("demo").innerHTML = diffTime;
	document.getElementById("timer").innerHTML = parseInt(diffTime);
}

start();