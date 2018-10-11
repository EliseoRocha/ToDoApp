
class ToDoItem{
    //fields(data to keep track of)
    title:string;
    timeEstimate:number;
    description:string;
    assignedTo:string;
    isDone:boolean;

    constructor(title:string){
        this.title = title;
    }
}

//instantiating a ToDoItem
//creating and instance of the ToDoItem
//creating an object
let task = new ToDoItem("Test item");
//task.title = "Test item";
task.description = "This is just a test";
task.timeEstimate = 5;