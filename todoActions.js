const readline = require("readline-sync");
const fs = require("fs");

exports.listTasks = () => {
    console.log("-----------Display All Task-----------");
    try{
        let data = JSON.parse(fs.readFileSync("tasks.json"));
        return data;
    }catch(error){
        console.log(error);
    }
}

exports.addTask = () => {
    console.log("-----------Add New Task-----------");
    let id = readline.question('Enter task id: ');
    let task_name = readline.question('Enter task name: ');

    let task = {
        id: id,
        task_name: task_name,
        isCompleted: 0
    }

    try{
        let data = JSON.parse(fs.readFileSync("tasks.json"));
        let result = data.find(p => p.id == task.id);

        if(result){
            return 'Task ID must be unique';
        }else{
            data.push(task);
            fs.writeFileSync("tasks.json",JSON.stringify(data));
            return "***************Task Added Successfully***************";
        }

    }catch(error){
        console.log(error);
    }
    
}

exports.markAsComplete = () => {
    console.log("-----------Mark as Completed-----------");
    let id = readline.question('Enter task id: ');

    try{
        let data = JSON.parse(fs.readFileSync("tasks.json"));
        let result = data.find(t => t.id == id);

        if(!result){
            return 'Invalid Task ID';
        }else{

            data.map((task, index) => {
                if(task.id == id){
                    data[index].isCompleted = 1;
                }
                
            });
            
            fs.writeFileSync("tasks.json",JSON.stringify(data));
            return "***************Task Updated Successfully***************";
        }

    }catch(error){
        console.log(error);
    }
}

exports.deleteTask = () => {
    console.log("-----------Delete Task-----------");
    let id = readline.question('Enter task id: ');

    try{
        let data = JSON.parse(fs.readFileSync("tasks.json"));
        let result = data.find(t => t.id == id);

        if(!result){
            return 'Invalid Task ID';
        }else{

            let newData = data.filter(task => task.id != id);
            console.log(newData);
            fs.writeFileSync("tasks.json",JSON.stringify(newData));
            return "***************Task Deleted Successfully***************";
        }

    }catch(error){
        console.log(error);
    }
}