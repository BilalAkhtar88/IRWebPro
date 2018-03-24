var loopNumber = 0;
var topicNum = ["310", "314", "336", "354", "362", "374", "375", "383", "397", "426"];
var topDesc;
var topNarr;
var startTime, endTime, diffTime;
var obj = "data.json";
var seedNumber;
 
function start(){
	startTime = new Date();
}

function end(){
	endTime = new Date();
    diffTime = endTime - startTime ;	
    diffTime = diffTime / 1000;
    var seconds = Math.round(diffTime);
}

function seedNumGen()
{
	var randNum = Math.random();
	seedNumber = parseInt(randNum*5,10);
}

function showTopic()
{
	seedNumGen();
	d3.json
	(obj, function(data) 
	{
		{
			if(loopNumber < 10)
			{
				
				end();
				start();
				topDesc = data[loopNumber].topicDesc;
				topNarr = data[loopNumber].topicNarr;
				var str = topicNum[0];
				var result = str.link("http://localhost/IRWebPro/Information_Retrieval_Project.html");
				document.getElementById("desc1").innerHTML = result;
				document.getElementById("summ1").innerHTML = topDesc;
				
				document.getElementById("Desc").innerHTML = topDesc;
				document.getElementById("Narr").innerHTML = topNarr;
				loopNumber = loopNumber + 1;
			}
			else
			{
				document.getElementById("Thanks").innerHTML = "Thanks for helping us in this survey!";
			}
		}
	}
	);
}

var x = location.href;
alert(x);