var secretNumber = 7;
var num = +prompt("plz guess a number between 1-9", "guess number");
if (secretNumber == num) {
    alert("Congratulations! You guessed the secret number");
} else if (secretNumber < num) {
    alert("u enter the greater that sec num try again");
}

else {
    alert("sorry guess again")
}