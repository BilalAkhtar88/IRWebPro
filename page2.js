var loopNumber = 1;
var startTime, endTime;
var diffTime;
var obj = "data.json";
//var topicNum = [];
var topDesc;
var topNarr;
 
function start(){
	startTime = new Date();
	//document.getElementById("timer").innerHTML = startTime.getTime();	
}

function end(){
	endTime = new Date();
    var diffTime = endTime - startTime ;	
    diffTime = diffTime / 1000;
    var seconds = Math.round(diffTime);
	//alert(seconds);
}

function showTopic()
{
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
				document.getElementById("Desc").innerHTML = topDesc;
				document.getElementById("Narr").innerHTML = topNarr;
				loopNumber = loopNumber + 1;
			}
			else
			{
				//Check how to hyperlink from javascript
				//href("file:///E:/University%20Data/Q3/Information%20Retrieval/Project/ProjectWebSite/IRWebPro/Thank.html")
			}
		}
	}
	);
}
