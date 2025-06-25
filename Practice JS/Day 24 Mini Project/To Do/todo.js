let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let dltbtns = document.querySelectorAll('.delete');

btn.addEventListener('click', function () {
    let task = input.value;
    input.value = '';
    
    let li = document.createElement('li');
    let dltbtn = document.createElement('button');

    dltbtn.innerText = 'X';
    dltbtn.classList.add('delete')
    li.innerText = task;
    li.appendChild(dltbtn);
    ul.appendChild(li);
})

ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let dltli = event.target.parentElement;
        dltli.remove();
    }
});