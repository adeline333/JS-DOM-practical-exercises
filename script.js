let button =document.getElementById('addButton');
let inputField = document.getElementById('todoInput');
let todoList = document.getElementById('todoList');

button.addEventListener('click', function (){

    let enteredText= inputField.value; //.value to get the text the user typed in the input field
    if (enteredText!=""){
        let newItem= document.createElement('li');
        newItem.textContent=enteredText;
        todoList.appendChild(newItem);

        let removeButton=document.createElement('button');
       removeButton.textContent='Remove';
        removeButton.setAttribute('style','padding:5px 5px;');
        newItem.appendChild(removeButton);
        removeButton.addEventListener('click',function(){
            newItem.remove();

            let checkBox=document.createElement('checkbox');
            todoList.appendChild(checkBox);
        })
    }

else{
    console.log("enter the activity");
}
})



