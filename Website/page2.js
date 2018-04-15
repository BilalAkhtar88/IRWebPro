

const PLATFORM_URI = "http://ireplatform.ewi.tudelft.nl:8080/IN4325";
var idexperiment; 
var user;

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
var outRelCheck = ["0", "0", "0", "0", "0", "0"]; 

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
				document.getElementById(idP).innerHTML = nT.substring(0,350);

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
					//alert(mapNumber + "   Time " + diffTime);
				}
	}
)
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
				start();
			}

			else if(loopNumber < 6)
			{
				if(relChecked == 0)
					end();
				else
				{
					outRelCheck[loopNumber - 1] = relChecked;
					relChecked = 0;
				}
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
				document.forms["Form2"]["searchText"].value = "";
				startSessionTimer();

				if (seedNumber < 5)
					seedNumber += 1;
				else
					seedNumber = 0;
				loopNumber = loopNumber + 1;
			}

			else
			{
				outRelCheck[loopNumber - 1] = relChecked;
				outTime[loopNumber - 1] = diffTime;
				//alert(outTime);
				//alert(outRelCheck);
				//alert(outMapNum);
				//alert(outTopicNum);
				registerCompleted(user);
				registerDocView(user, outTime, outRelCheck, outMapNum, outTopicNum)

				document.getElementById("endThank").innerHTML = "Thanks for helping us in this survey!";
			}

		}
	}
	);
}

function registerDocView(user, outTim, outRelC, outMapN, outTopicN) {
	var evalue = new Object();
	evalue.age = userAge;
	evalue.qualif = userQual;
	evalue.language = nativeLang;
	evalue.time = outTim;
	evalue.relevancyScore = outRelC;
	evalue.mapVals = outMapN;
	evalue.topicsN = outTopicN;

	registerEvent(idexperiment, user, "JSON", "click", evalue, null);
}

function startSessionTimer() {
    sessionTime = 2 * 60;
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

function init(idexp) {
	idexperiment = idexp;	//set the experiment identifier. It will be used to register events and in general to interact with the platform
	console.log(user);
	console.log("/n" + idexperiment);
	setParameters(idexp); //read the parameters from the URL and set them in cookies (if they are already set, take the values from the cookies)
	registerExposure(user);
}

function setParameters(idexp){
	user  = getParameterFromURL("_idunit");
	console.log("/n" + user);
}

function checkParam(cookiename, param) {
	var value = null;
	value = getParameterFromURL(param);
	return value;
}

function getParameterFromURL(name) {
	var query = window.location.search;
	if (!query) return null;
	query = decodeURIComponent(query);
	var encoded = query.replace("?","");
    var decoded = "?"+atob(encoded);
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(decoded);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2]);
}

function registerExposure(user) {
	registerEvent(idexperiment, user, "STRING", "exposure", "", null);
}

function registerCompleted(user) {
	registerEvent(idexperiment, user, "STRING", "completed", "", null);
}

function getXMLHttpRequest() {
	if (window.XMLHttpRequest) {
		// code for modern browsers
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for old IE browsers
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}



function registerEvent(idexperiment, idunit, etype, ename, evalue, paramvalues) {
	if (user){
		var xhttp = getXMLHttpRequest();
		var inputJson = new Object();
		inputJson.idunit = idunit;
		inputJson.idconfig = idexperiment;
		inputJson.etype = etype;
		inputJson.ename = ename;
		inputJson.evalue = evalue;
		if (paramvalues != null)
			inputJson.paramvalues = paramvalues;
		xhttp.open("POST", PLATFORM_URI+"/service/event/register");
		xhttp.setRequestHeader("Content-Type", "text/plain");   //This same endpoint is also implemented to receive JSON, but if it is used
		var inputTxt = JSON.stringify(inputJson);				//from the client-side as in this case, it may not work due to CORS (Cross-Origin Resource Sharing)
		xhttp.send(inputTxt);
	}
}
