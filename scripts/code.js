class ToDoItem {
    constructor(title) {
        this.title = title;
    }
}
let task = new ToDoItem("Test item");
task.description = "This is just a test";
task.timeEstimate = 5;
let items = new Array();
function addNewItem(todo) {
    items.push(todo);
    console.log(items);
}
window.onload = function () {
    let addTaskBtn = document.getElementById("add_task");
    addTaskBtn.onclick = processNewTask;
};
function processNewTask() {
    let item = getToDoItem();
    addNewItem(item);
}
function getToDoItem() {
    let title = getInputElem("title").value;
    let item = new ToDoItem(title);
    item.timeEstimate = parseFloat(getInputElem("time_estimate").value);
    let assignedToList = document.getElementById("assigned_to");
    item.assignedTo = assignedToList.options[assignedToList.selectedIndex].text;
    item.isDone = getInputElem("is_done").checked;
    return item;
}
function getInputElem(id) {
    return document.getElementById(id);
}
