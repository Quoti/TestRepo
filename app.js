function myFunction1(){
	alert("Hello! I am an alert box!!");
	const fs = require('fs');
	const ytdl = require('ytdl-core');

	ytdl('http://www.youtube.com/watch?v=A02s8omM_hI')
	  .pipe(fs.createWriteStream('video.flv'));
}

function displayDate()
{
    document.getElementById("demo").innerHTML=Date();
}

window.onload = function() {
    var btn = document.getElementById("myButton");
    btn.onclick = displayDate;
}