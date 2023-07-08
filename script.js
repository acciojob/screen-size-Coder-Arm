//your JS code here. If required.
const div = document.getElementById("sizeInfo");
const heading = div.firstElementChild;
window.onresize = function(){
	heading.innerHTML = `<h1>Width: ${window.innerWidth} and Height: ${window.innerHeight}</h1`;
}

