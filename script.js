console.log('Hello World');

const completed = document.querySelector('.completed');
const deleted = document.querySelector('.deleted');
const addTodo = document.querySelector('.addTodo');
const list = document.querySelector('.list');


const generateTemplate = todo => {
    const html = `<li class="todoList">${todo}
                  <button class="completed">Completed</button>
                  <button class="delete">Delete</button>
                  </li>`
    list.innerHTML += html
}

addTodo.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addTodo.addTodo.value.trim();
    console.log(todo);

    if (todo.length) {
        generateTemplate(todo);
        addTodo.reset();
    };
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});