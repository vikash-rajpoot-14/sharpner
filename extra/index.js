
const ul = document.getElementById('items');
const submit = document.querySelector('input[type="submit"]');
const input = document.getElementById('item');
console.log(input.value)

submit.addEventListener('click', addItem);
ul.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const text = document.createTextNode(input.value
        + " ");
    const button = document.createElement('button');
    button.className = "btn btn-danger btn-sm float-right delete";
    button.appendChild(document.createTextNode('X'))
    li.appendChild(text);
    li.appendChild(button);
    ul.appendChild(li)
    const edit = document.createElement('button');
    edit.className = 'edit-button';
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit)
    input.value = "";
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentNode;
        ul.removeChild(li);
    }

}

const ele = document.querySelectorAll('li')

ele.forEach(child => {
    const edit = document.createElement('button');
    edit.className = 'edit-button';
    edit.appendChild(document.createTextNode('Edit'));
    child.appendChild(edit);
})

const filter = document.getElementById('filter');
filter.addEventListener('keyup', filteritem)

function filteritem(e) {
    const text = e.target.value.toLowerCase();
    const itemlist = document.getElementsByTagName('li');
    Array.from(itemlist).forEach(e => {
        const item = e.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            e.style.display = "block"

        } else {
            e.style.display = "none";
        }
    })
}
