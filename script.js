//your JS code here. If required.
const div = document.getElementById("sizeInfo");

window.onresize = function(){
	div.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1>`;
}

