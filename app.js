let todo = [];

let req = prompt("Please Enter Your Request: ");

while (true) {
  if (req == "quit") {
    console.log("quiting app....");
    break;
  }
  if (req == "list") {
    console.log("--------------------------------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("--------------------------------------------");
  } else if (req == "add") {
    let task = prompt("Enter the task you want to add: ");
    todo.push(task);
    console.log("Tasks added...");
  } else if (req == "delete") {
    let indx = prompt("Enter the task index you want to delete: ");
    todo.splice(indx, 1);
    console.log("Tasks Deleted..");
  } else {
    console.log("Wrong Request...");
  }
  req = prompt("Please Enter Your Request: ");
}
