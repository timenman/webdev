var answer=prompt("Are we there yet?");

while((!(answer.includes("Yes"))) && !(answer.includes("Yeah"))){
  var answer=prompt("Are we there yet?");
}

alert("Yay! We made it!");
