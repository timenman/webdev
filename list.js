var todos = [];

while (input !== "quit"){
  var input = prompt("What do you want to do?");
    if (input === "new"){
      newToDo();
    }
    else if (input === "list"){
      console.log("*******")
      todos.forEach(function(item, i){
        console.log(i+": "+item);
    });
    console.log("*******")
  }
  else if (input === "delete"){
    var index = prompt("Please provide index");
    todos.splice(index, 1);
    alert("Item deleted.");
  }
}
console.log("OK, you quit the app.");

function newToDo(){
  var newtodo = prompt("Enter TODO");
  todos.push(newtodo);
  alert("A new TODO has been added.")
}
