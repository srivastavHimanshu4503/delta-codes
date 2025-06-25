function playGame() {
    let start = parseInt(prompt("Enter starting number: "));
    let end = parseInt(prompt("Enter last number: "));

    alert("Random number is generating......");
    let random = Math.floor(Math.random() * (end - start + 1)) + start;

    console.log("Random number created. Starting the GAME...");
    alert("Random number created. Starting the GAME...");

    let userChoice = parseInt(prompt("Guess the number: "));
    console.log("User chose " + userChoice);
    let chance = 10;
    
    while ((userChoice != random) && chance > 0) {
        chance--;
        if (userChoice < random) {
            console.log("Wrong Choice, Increase the guess. Chances left: " + chance);
            alert("Wrong Choice, Increase the guess. Chances left: " + chance);
        }
        else {
            console.log("Wrong Choice, Decrease the guess. Chances left: " + chance);
            alert("Wrong Choice, Decrease the guess");
        }
        userChoice = parseInt(prompt("Guess the number: "));
        console.log("User chose: " + userChoice + ", Chances left: " + chance);
    }

    if (chance) {
        console.log(`Congrats, You have won the game in ${chance} chances.`);
        alert(`Congrats, You have won the game in ${10-chance} chances.`);
    }
    else {
        console.log(`Oops, you've lost the game. Chances left: ${chance}`);
        alert(`Oops, you've lost the game. Chances left: ${chance}`);
    }
}