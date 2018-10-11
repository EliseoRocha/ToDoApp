var ToDoItem = (function () {
    function ToDoItem(title) {
        this.title = title;
    }
    return ToDoItem;
}());
var task = new ToDoItem("Test item");
task.description = "This is just a test";
task.timeEstimate = 5;
