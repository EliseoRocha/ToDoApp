//This is so we don't have errors, tells main to look for the file.
/// <reference path="ToDoItem.ts" />
let items = new Array<ToDoItem>();

/**
 * Adds a new ToDoItem to the current list
 * of items
 * @param todo 
 */
function addNewItem(todo:ToDoItem){
    items.push(todo);
    
    console.log(items);
}

window.onload = function(){
    let addTaskBtn = document.getElementById("add_task");
    
    addTaskBtn.onclick = processNewTask;
}

function processNewTask(){
    //Get data off form
    let item: ToDoItem = getToDoItem();
    
    //Add item to current list
    addNewItem(item);
}

/**
 * Gets all of the data off the form and populates
 * a ToDoItem object
 * @returns Complete ToDoItem
 */
function getToDoItem() {
    let title = getInputElem("title").value;
    
    let item: ToDoItem = new ToDoItem(title);
    
    item.timeEstimate = parseFloat(getInputElem("time_estimate").value);
    
    let assignedToList = <HTMLSelectElement>document.getElementById("assigned_to");
    
    item.assignedTo = assignedToList.options[assignedToList.selectedIndex].text;
    
    item.isDone = getInputElem("is_done").checked;
    
    return item;
}

function getInputElem(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}