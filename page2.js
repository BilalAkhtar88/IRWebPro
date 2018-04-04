var userAge = 0;
var userQual = "MS";
var nativeLang = "English";
var searchText = " ";
var loopNumber = 0;
var relChecked = 0;

var startTime, endTime, diffTime;

var obj = "data.json";
var obj55 = "MAP55P.json";
var obj75 = "MAP75P.json";
var obj95 = "MAP95P.json";
var objec = "";

var sessionTime = 0;
var currDate = new Date();
var tim;
var f = new Date();

var topi;
var topicNum = ["314", "336", "362", "374", "383", "397"];
var mapNum = ["55", "75", "95"];
var topicNumber;
var mapNumber;
var topDesc;
var topNarr;

var stInd = 0;
var detailText = 0;
var seedNumber;

var outTopicNum = ["0" , "0" , "0" , "0" , "0" , "0"];
var outMapNum = ["0" , "0" , "0", "0" , "0" , "0"];
var outTime = ["0" , "0" , "0" , "0" , "0" , "0"];

function vanish()
{
	userAge = document.forms["Form"]["ageOfUser"].value;
    userQual = document.forms["Form"]["userQual"].value;
    nativeLang = document.forms["Form"]["Lang"].value;
    if (userAge == null || userAge=="")
	{
		userAge = 0;
	}
	if(userQual == null || userQual == "")
	{
		userQual = "MS";
	}
	if(nativeLang == null || nativeLang == "")
	{
		nativeLang = "English";
	}
	document.getElementById("introFirstPage").remove();
	document.getElementById("topicDetails").style.display = "block";
	showTopic();

}

function start(){
	startTime = new Date();
}

function end(){
	endTime = new Date();
    diffTime = endTime - startTime ;
    diffTime = diffTime / 1000;
    var seconds = diffTime;
}

function seedNumGen()
{
	var randNum = Math.random();
	seedNumber = parseInt(randNum*6,10);
}

function showMAP()
{
	searchText = document.forms["Form2"]["searchText"].value;
    if (searchText == null || searchText == "")
	{
		document.getElementById("searchList").style.display = "none";
		searchText = document.forms["Form2"]["searchText"].value;
		return false;
	}
	else
	{
		objec = "MAP" + mapNumber + "P.json";
		document.getElementById("searchList").style.display = "block";
		d3.json
		(objec, function(data)
		{
			//alert(mapNumber);
			if (topicNumber == "314")
				stInd = 0;
			else if (topicNumber == "336")
				stInd = 20;
			else if (topicNumber == "362")
				stInd = 40;
			else if (topicNumber == "374")
				stInd = 60;
			else if (topicNumber == "383")
				stInd = 80;
			else if (topicNumber == "397")
				stInd = 100;


			var idTag = 1;
			for (var i = stInd; i < (stInd + 20); i++)

			{
				var hLi = data[i].headLine;
				var nT = data[i].docText;
				var idH = "link" + idTag;
				var idP = "p" + idTag;

				document.getElementById(idH).innerHTML = hLi;
				document.getElementById(idP).innerHTML = nT.substring(0,250);

				idTag += 1;
			}
		}
		);
		return false;
	}
	}


function dispDocLink(val)
{
	objec = "MAP" + mapNumber + "P.json";
	d3.json
	(objec, function(data)
	{
		if (topicNumber == "314")
				stInd = 0;
			else if (topicNumber == "336")
				stInd = 20;
			else if (topicNumber == "362")
				stInd = 40;
			else if (topicNumber == "374")
				stInd = 60;
			else if (topicNumber == "383")
				stInd = 80;
			else if (topicNumber == "397")
				stInd = 100;

		var idTag = parseInt(val);
		var i = stInd + idTag -1;
		var nT = data[i].docText;
		var idP = "p" + idTag;

		if(detailText == 0)
		{
			document.getElementById(idP).innerHTML = nT;
			detailText = 1;
		}
		else
		{
			document.getElementById(idP).innerHTML = nT.substring(0,250);
			detailText = 0;
		}
	}
)

}

function checkRelevancy(val)
{
	objec = "MAP" + mapNumber + "P.json";
	d3.json
	(objec, function(data)
	{
		if (topicNumber == "314")
				stInd = 0;
			else if (topicNumber == "336")
				stInd = 20;
			else if (topicNumber == "362")
				stInd = 40;
			else if (topicNumber == "374")
				stInd = 60;
			else if (topicNumber == "383")
				stInd = 80;
			else if (topicNumber == "397")
				stInd = 100;

		var idTag = parseInt(val);
		var i = stInd + idTag -1;
		var nT = data[i].rel;
		if (nT == "1")
			if (relChecked == 0)
				{
					end();
					relChecked = 1;
					alert(mapNumber + "   Time " + diffTime);
				}
	}
)
}

function downloadJSONFile(name, json) {
  let a = document.createElement('a');
  let data = new Blob([json]);
  a.download = `${name}.json`;
  a.href = URL.createObjectURL(data);
  a.click();
  URL.revokeObjectURL(data);
}

function showTopic()
{
	d3.json
	(obj, function(data)
	{
		{
			if(loopNumber < 6)
			{
			if(loopNumber == 0)
			{
				seedNumGen();
				while (seedNumber == 6)
				{
				seedNumGen();
				}
				//end();
				start();
			}

			else if(loopNumber < 6)
			{
				if(relChecked == 0)
					end();
				else
					relChecked = 0;
				outTime[loopNumber - 1] = diffTime;
				start();
			}

				topicNumber = topicNum[seedNumber];
				mapNumber = mapNum[(parseInt(seedNumber / 2))];
				outMapNum[loopNumber] = mapNumber;
				outTopicNum[loopNumber] = topicNumber;
				topDesc = data[seedNumber].topicDesc;
				topNarr = data[seedNumber].topicNarr;
				document.getElementById("Desc").innerHTML = topDesc;
				document.getElementById("Narr").innerHTML = topNarr;
				startSessionTimer();

				if (seedNumber < 5)
					seedNumber += 1;
				else
					seedNumber = 0;
				loopNumber = loopNumber + 1;
			}

			else
			{
				outTime[loopNumber - 1] = diffTime;
				alert(outTime);
				alert(outMapNum);
				alert(outTopicNum);

			var obj = {
   			table: []};

			obj.table.push({"outTIme": outTime, "outMapNum":outMapNum, "outTopicNum":outTopicNum});
			//var json = JSON.stringify(obj);
			console.log(json);
		$.ajax({
        type : "POST",
        url : "json.php",
        dataType : 'json',
        data : {
					json
        }
    });
			downloadJSONFile('testout', json);

			/*var fs = require('fs');
			fs.writeFile('myjsonfile.json', json, 'utf8', callback);*/

				document.getElementById("endThank").innerHTML = "Thanks for helping us in this survey!";
			}

		}
	}
	);
}

function startSessionTimer() {
    sessionTime = 0.25 * 60;
	//alert(loopNumber);
    countDownSession();
}

function countDownSession() {
    if (sessionTime > 0) {
        sessionTime--;
        tim = setTimeout(countDownSession, 1000);
    } else {
		if(loopNumber < 6)
			document.getElementById("searchList").style.display = "none";
		showTopic();
    }

    var min = Math.floor(sessionTime / 60);
    var secDisplay = sessionTime % 60;

	if(loopNumber < 7)
	{
	if(loopNumber == 7)
	{
	}
	else
	{
		document.getElementById("timer").innerHTML = "Your Left Time  is : " + min + " Minutes," + secDisplay + " Seconds";
	}
	}
}

function endOuterTimer() {
    clearTimeout(tim);
    sessionTime = 0;
    countDownSession();
}
