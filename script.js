const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");
// console.log(list.innerHTML);

// a function for generating a html element of "li"
// then adds it to the DOM
const generateTemplate = (todo) => {
   const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};

// add todos
addForm.addEventListener("submit", e=> {
    e.preventDefault();
    
    const todo = addForm.add.value.trim();
    // checks if the input is empty e.g. a space
    // resets the form after each submit
    if(todo.length){
       generateTemplate(todo); 
       addForm.reset();
    }
});

// delete todos
list.addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});


