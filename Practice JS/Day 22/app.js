// let at = document.querySelector('.box a');
// at.style.color = "Purple";

let as = document.querySelectorAll('.box ul a');

for(let a of as) {
    a.style.color = "green";
}

let box = document.querySelector('.box');
box.children[1].children[1].previousElementSibling.children[0].style.color = "red";

box.children[1].children[2].children[0].children[0].nextElementSibling.children[0].style.color = "yellow";