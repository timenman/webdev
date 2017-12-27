var secretNumber = 4

guess = Number(prompt("Guess a number!"));

  if (secretNumber === guess) {
    alert("You guessed right!");
  }

  else if (secretNumber > guess) {
    alert("Too high. Guess again.")
  }

  else {
    alert("Too low. Guess again.")
  }
