// TO DO USING JS
let toDo = [];

let action = prompt("TO DO APP, commands 'list' , 'add', 'delete', 'quit' .");

while(action != "quit") {

    if(action == "list") { // list command
        if(toDo.length > 0) {
            alert(`Your To do list-> ${toDo}`);
        } else {
            alert("list is empty, add tasks to display")
        }
    } else if(action == "add") { // add command
        
        let task = prompt("Enter the task to add");
        toDo.push(task);
        alert(`${task} task added successfully! into the list`);
    } else if(action == "delete") { // delete command
        
        let toDelete = prompt("Enter the task to delete");
        let idx = toDo.indexOf(toDelete);
        if(idx == -1) {
            alert("Task you wanted to delete , doesn't exists in to do list");
        } else {
            let deletedTask = toDo.splice(idx, 1);
            alert(`${deletedTask} task deleted successfully! from the list`);
        }
    } else {
        alert("Enter the VALID command")
    }
    
    action = prompt("TO DO APP, commands 'list' , 'add', 'delete', 'quit' .");
}

alert("You quit");