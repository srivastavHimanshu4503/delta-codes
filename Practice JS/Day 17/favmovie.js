let favMovie = "Iron Man";

let movie = prompt("Enter the movie name: ");
let quit = "quit";
while ((movie != favMovie.toLowerCase()) || (movie == quit)) {
    alert("You choose wrong movie. Try again!");
    movie = prompt("Enter the movie name or if you want to quit write 'quit':").toLowerCase();
}

if (movie == favMovie.toLowerCase()) {
    console.log("Congrats! you chose the right movie.");
} else {
    console.log("OOPs! you loose. Better play next time.");
}