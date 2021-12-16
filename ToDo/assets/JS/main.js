const addTodo = document.querySelector('.add');
const list = document.querySelector('ul');
const search = document.querySelector('.search input');
// const myTodo = document.querySelectorAll('.todo');

const generateTemplate = todo => {
    const agil = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
    `;
    list.innerHTML += agil;
};


addTodo.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addTodo.reset();
    }

});
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filteredTodo = (term) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};




search.addEventListener('keyup', () => {
    const term = search.value.trim();
    const termin = term.toLowerCase();
    filteredTodo(termin);
});