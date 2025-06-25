function todoGen() {
    let todo = [];
    let req = prompt("Enter your request: ").toLowerCase();
    
    while (req != "quit") {
        if (req == "list") {
            let i = 1;
            for(item of todo) {
                console.log(i++, item);
            }
        }
        else if (req == "add") {
            let item = prompt("Enter the work you want to add in the todo:");
            todo.push(item);
            console.log("Task added.");
        }
        else if (req == "delete") {
            console.log("Available list items: ");
            let i=1;
            for(item of todo) {
                console.log(i++, item);
            }
            let remove = parseInt(prompt("Enter the list item number to delete that work:"));
            todo.splice(remove-1, 1);
        }
        else {
            alert("Invalid requests, Try again!");
        }
    
        req = prompt("Enter your request:").toLowerCase();
    }
    
    console.log("Quitting app.")
}
