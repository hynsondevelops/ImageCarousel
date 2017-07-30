
var transitionSpeed = 5000; // milliseconds
var timeout;
var currentIndex = 0;

var images = document.getElementsByClassName("image")

function switchImage()
{
	console.log("HEY")
	images[currentIndex].id = ""
	currentIndex = parseInt(this.id)
	images[currentIndex].id = "current"
	clearTimeout(timeout)
	timeout = setTimeout(function(){ autoAdvance() }, transitionSpeed); 	
}

function associateDots()
{
	console.log("DOTS")
	dots = document.getElementById("dots")
	for (var i = 0; i < images.length; i++)
	{
		console.log(i)
		var node = document.createElement("img")
		node.src = 'BlackDot.png'
		node.id = i
		node.addEventListener("click", switchImage, false)
		dots.appendChild(node)
	}
	clearTimeout(timeout)
	timeout = setTimeout(function(){ autoAdvance() }, transitionSpeed); 
}


function next()
{
	images[currentIndex].id = ""
	if (currentIndex + 1 < images.length) //no need to wrap
	{
		currentIndex += 1;
	}
	else
	{
		currentIndex = 0;
	}
	images[currentIndex].id = "current"
	clearTimeout(timeout)
	timeout = setTimeout(function(){ autoAdvance() }, transitionSpeed); 

}


function previous()
{
	images[currentIndex].id = ""
	if (currentIndex - 1 >= 0) //no need to wrap
	{
		currentIndex -= 1;
	}
	else
	{
		currentIndex = images.length - 1;
	}
	images[currentIndex].id = "current"
	clearTimeout(timeout)
	timeout = setTimeout(function(){ autoAdvance() }, transitionSpeed); 

}




function autoAdvance()
{
	next()
}

document.addEventListener("DOMContentLoaded", function()
{
	associateDots()
	autoAdvance()
});