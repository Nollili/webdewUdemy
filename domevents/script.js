const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const ulLength = document.getElementsByTagName("li").length;
const delBtn = document.querySelector(".btn");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	let delBtn = document.createElement("button");
	delBtn.classList.add("btn");
	delBtn.innerHTML = "DELETE";
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteItems);

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

ul.onclick = function (event) {
	let target = event.target;
	target.classList.toggle("done");
}

function deleteItems() {
	let ul = document.querySelector("ul");
	let li = document.querySelector("li");
	ul.removeChild(li);
	console.log("del");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
delBtn.addEventListener("click", deleteItems);
