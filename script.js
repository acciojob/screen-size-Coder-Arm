//your JS code here. If required.
const div = document.getElementById("sizeInfo");
const heading = div.firstElementChild;
window.onresize = function(){
	heading.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}

