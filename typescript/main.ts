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
    
    console.log(items); //pring array to console

    addItemToPage(todo);
}

function addItemToPage(item:ToDoItem){
    //Get the <ul> off the page
    let itemList = document.getElementById("item_list");

    //Create a <li> programatically
    let newItem = document.createElement("li");

    //Add text through DOM manipulation
    let textNode = document.createTextNode(item.title);

    //newItem.appendChild(textNode);
    //Add text through property, same as above
    newItem.innerText = item.title;

    newItem.setAttribute("data-timeestimate", item.timeEstimate.toString());

    newItem.onclick = ToDoItemClicked;

    //Adding the <li> to the <ul>
    itemList.appendChild(newItem);
}

function ToDoItemClicked(){
    console.log("toDoItemClicked triggered");

    //Get the <li> the user clicked
    let selectedItem = <HTMLLIElement>this;

    selectedItem.classList.toggle("itemDone");

    if (selectedItem.classList.contains("itemDone")) {
        let hours = selectedItem.getAttribute("data-timeestimate");
        alert("Congrats on completing " + hours + " of work");
    }
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