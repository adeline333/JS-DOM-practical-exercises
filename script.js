let button =document.getElementById('addButton');
let inputField = document.getElementById('todoInput');
let todoList = document.getElementById('todoList');

button.addEventListener('click', function (){

    let enteredText= inputField.value;
    if (enteredText!=""){
        let newItem= document.createElement('li');
        newItem.textContent=enteredText;
        todoList.appendChild(newItem);
    }

else{
    console.log("enter the activity");
}
})



