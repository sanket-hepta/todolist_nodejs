const readline = require("readline-sync");
const todoActions = require("./todoActions")

do{
    console.log("----------------TODO Actions---------------");
    console.log("1. List Tasks");
    console.log("2. Add Task");
    console.log("3. Mark as Complete");
    console.log("4. Delete Task");

    let option = readline.question("Select action to perform: ");
    switch(option){
        case "1":
            console.log(todoActions.listTasks());
            break;
        
        case "2":
            console.log(todoActions.addTask());
            break;

        case "3":
            console.log(todoActions.markAsComplete());
            break;
        
        case "4":
            console.log(todoActions.deleteTask());
            break;

        default:
            console.log(todoActions.listTasks());
    }
}while(true);