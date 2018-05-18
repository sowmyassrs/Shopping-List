var button = document.getElementById("additemsbutton");
var input = document.getElementById("iteminput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function addListElement(){
		var li = document.createElement("li");//Create a <li> element
		var addDelButton = document.createElement("button");//Create a <button> element
		var icon = document.createElement("i");//Create an icon <i> element
		li.appendChild(document.createTextNode(input.value));//Append the input text to <li> element
		li.classList.add("list-group-item");//Add class to <li> element
		icon.setAttribute("class","glyphicon glyphicon-trash deleteIcon");//Add class to icon <i> element - Method2
		addDelButton.setAttribute("class","btn btn-outline-danger deleteItem");//Add class to <button> element
		addDelButton.appendChild(icon);//Add icon element <i> to <button> element
		li.appendChild(addDelButton);//Append addDelButton <button> to <li> element
		ul.appendChild(li);//Append <li> element with text, button and icon to <ul> element
		input.value = "";
}
function addListAfterClick(){
	if (inputLength() > 0)
	{	addListElement();
	}
}

function addListAfterKeyPress(event){
	if (inputLength() > 0 && event.keyCode === 13)
	{	addListElement();
	}
}

function listEvent(event){
	if(event.target.className==="btn btn-outline-danger deleteItem"||event.target.className==="glyphicon glyphicon-trash deleteIcon"){
		if(event.target.className==="btn btn-outline-danger deleteItem"){
			var toBeDeleted = event.target.parentElement;
		}
		else if(event.target.className==="glyphicon glyphicon-trash deleteIcon"){
			var toBeDeleted = event.target.parentElement.parentElement;
		}
		var userConfirm=confirm("Are you sure you want to delete item - \"" + toBeDeleted.innerText + "\"?");
		if(userConfirm===true){
			toBeDeleted.parentNode.removeChild(toBeDeleted);
		}
	}	
	else if (event.target.className==="list-group-item" || event.target.className==="list-group-item done"){
		event.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
ul.addEventListener("click",listEvent);