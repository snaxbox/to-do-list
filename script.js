
const search = document.querySelector(".search input");

const list = document.querySelector(".todos");
// console.log(list.innerHTML);

const addForm = document.querySelector(".add");

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

    saveToLocal(todo);
});

// delete todos
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        removeTodos(e.target.previousElementSibling.textContent);
        // console.log(e.target.previousElementSibling.textContent);

    }
});

//filter todos
const filterTodos = (term) =>{
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo)=> todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo)=> todo.classList.remove('filtered'));
};


search.addEventListener("keyup", () => {
    const term = search.value.trim();
    filterTodos(term);
});

// localStorage.setItem("name","eric");
// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));


// store in localStorage
function saveToLocal(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Retrieve from localstorage
function getTodos(){
    if(localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach((todo)=>{
             generateTemplate(todo);
               })
    }
}
//run getTodos when page refreshes
getTodos();

// remove todos from local storage
function removeTodos(dt){
    let todos = JSON.parse(localStorage.getItem("todos"));
    // console.log(todos);
    todos.forEach((todo, index)=>{
        if(todo === dt){
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}




// Retrieve from localstorage

// function getTodos(){
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//     todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);

//     localStorage.setItem("todos", JSON.stringify(todos));

//     todos.forEach((todo)=>{
//         generateTemplate(todo);
//     })

// }


// store in localStorage
// function saveToLocal(todo){
//     let todos;
//     if(localStorage.getItem("todos") === null){
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem("todos"));
        
//     } 
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

