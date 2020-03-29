document.getElementById("submit").addEventListener("click", addContent);

function addContent(event){
	event.preventDefault();
	if(document.getElementById('itembox').value != ""){
		document.querySelector('.slist').innerHTML += 
		`<li class = "item"><h3 class = "text">` + document.getElementById('itembox').value + `</h3>
		<button type="button" class = "check">
            check
        </button>
        <button type="button" class = "delete">
            delete
        </button></li>`;

        let delete_buttons = document.querySelectorAll(".delete");
        let check_buttons = document.querySelectorAll(".check");

        for (var i = 0 ; i < delete_buttons.length; i++){
        	delete_buttons[i].addEventListener("click", deleteItem);
        	check_buttons[i].addEventListener("click", checkItem);
        }
	}
}

function deleteItem(event){
	event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
}

function checkItem(event){
	if(event.currentTarget.parentNode.querySelector('.text').style.textDecoration == "line-through"){
		event.currentTarget.parentNode.querySelector('.text').style.textDecoration = "none";
	} else {
		event.currentTarget.parentNode.querySelector('.text').style.textDecoration = "line-through";
	}
}