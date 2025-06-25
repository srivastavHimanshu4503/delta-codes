// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]


// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
let body = document.querySelector('body');
let btn = document.createElement('button');
btn.innerText = "Click to change color";
body.append(btn);

btn.addEventListener('click', function (){
    btn.style.backgroundColor = 'green';
    btn.style.color = 'white';
});

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]
let h2 = document.createElement('h2');
let input = document.createElement('input');
h2.innerText = "Text editor"
input.setAttribute("placeholder", "Enter your name");
body.append(h2);
body.append(input);

input.addEventListener("input", function() {
    let sanitized = this.value.replace(/[^a-zA-Z ]/g, '');
    this.value = sanitized;
    h2.innerText = sanitized;
});