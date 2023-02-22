const amount = document.getElementById("myAmount");
const desc = document.getElementById("mydesc");
const cat = document.getElementById("option");
const submit = document.getElementById("mySubmit");
const ul = document.getElementById("list");

let arr = [];
let i = 1;
while (localStorage.getItem(`user${i}`) != null) {
    arr.push(JSON.parse(localStorage.getItem(`user${i}`)))
    i++;
}
arr.forEach(user => {
    const li = document.createElement("li");
    li.className = "listItem";
    const textNode = document.createTextNode(`${user.amount} ${user.desc} ${user.cat} `)
    const edit = document.createElement('button');
    const del = document.createElement('button');
    edit.className = "btn btn-primary";
    del.className = "btn btn-danger";
    edit.innerText = "Edit"
    del.innerText = "Delete";
    li.appendChild(textNode);
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    li.className = "listItem";
    const textNode = document.createTextNode(`${amount.value} ${desc.value} ${cat.value} `)
    const edit = document.createElement('button');
    const del = document.createElement('button');
    edit.className = "btn btn-primary";
    del.className = "btn btn-danger";
    edit.innerText = "Edit"
    del.innerText = "Delete";
    li.appendChild(textNode);
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);
    console.log(li)
    console.log(amount.value, desc.value, cat.value)
    const obj = {
        "amount": amount.value,
        "desc": desc.value,
        "cat": cat.value
    }
    const number = ul.childElementCount;
    axios.post("https://crudcrud.com/api/8c3fa0e7610d4110a767f47a4f382537/userDetail", {
        "amount": amount.value,
        "desc": desc.value,
        "cat": cat.value
    }).then((res) => console.log(res)).catch(err => console.log(err))
    // localStorage.setItem(`user${number}`, JSON.stringify(obj));
    amount.value = "";
    desc.value = "";
    cat.value = "";
})

ul.addEventListener("click", removeItem)

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-danger')) {
        var li = e.target.parentNode;
        let nodes = Array.from(li.closest('ul').children); // get array
        let index = nodes.indexOf(li);
        ul.removeChild(li);
        localStorage.removeItem(`user${index + 1}`)
    }
}

ul.addEventListener("click", editItem)

function editItem(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-primary')) {
        var li = e.target.parentNode;
        let nodes = Array.from(li.closest('ul').children); // get array
        let index = nodes.indexOf(li);
        ul.removeChild(li);
        const user = arr[index];
        amount.value = user.amount;
        desc.value = user.desc;
        cat.value = user.cat;
        localStorage.removeItem(`user${index + 1}`)

        console.log(user)
    }
}