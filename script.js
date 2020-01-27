// 1. If you click on the list item, it toggles the .done  
//class on and off.

// 2. Add buttons next to each list item to delete the item 
//when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically 
//adds the delete button next to it (hint: be sure to check 
//if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {

}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");

	div.appendChild(li);
	div.appendChild(delButton);
	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild(document.createTextNode("DELETE!"));
	delButton.classList.add("delButton");
	div.classList.add("listElement");

	div.appendChild(li)
	div.appendChild(delButton);
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// 1. If you click on the list item, it toggles the .done  
//class on and off.

function toggleDoneClass(event) { 
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

// 2. Add buttons next to each list item to delete the item 
//when clicked on its corresponding delete button.
// 3. BONUS: When adding a new list item, it automatically 
//adds the delete button next to it (hint: be sure to check 
//if new items are clickable too!)

function deleteElementFromList(event) {
	if (event.target.tagName === "BUTTON"){
		event.target.parentNode.remove();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDoneClass);
ul.addEventListener("click", deleteElementFromList);