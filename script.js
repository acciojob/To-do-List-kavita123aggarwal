//your code here
const inputBox = document.getElementById("newTodoInput");
const list = document.getElementById("todoList");

function addTask(){
	if(inputBox.value ==''){
		alert("you must write something!");
	}
	else{
		let li= document.createElement("li");
		li.innerHTML = inputBox.value;
		list.appendChild(li);
	}
	inputBox.value = "";
}
