//your JS code here. If required.
const div = document.getElementById("sizeInfo");
const heading = div.firstElementChild;
function display(){
	heading.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
}
window.onload = display();
window.onresize = display();

  