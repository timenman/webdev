var age = Number(prompt("How old are you?"));

if(age < 0) {
  console.log("Please enter a valid age.");
}

if (age === 21){
  console.log("Happy 21st Birthday!");
}

if(age % 2 !== 0){
  console.log("You age is odd!");
}

if(age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square.");
}
