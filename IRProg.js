

function saySomething()
{
	document.write("Nice short and sweet function!");
	fetch('Aquaint_topics.txt')
	.then(response => response.text())
	.then(text => console.log(text));
	if (window.File && window.FileReader && window.FileList && window.Blob) 
	{
		alert('Great success! All the File APIs are supported.');
	} 
	else 
	{
		alert('The File APIs are not fully supported in this browser.');
	}
}

 var randNum = Math.random(); //Apply condition that it is always less than 1 and never equal to 1.
 //var lines = '<div id="jwplayer"><center>' randNum '</center></div>'

//saySomething();




	//var MAP = 0;				//Comment Added here
	//var alertDisp = "Use separate file for scripting";
	//var boolVar = true;
	
	alert (randNum);	//Alert function
	document.write(parseInt(randNum*5, 10));	
