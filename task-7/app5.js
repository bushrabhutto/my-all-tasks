var nationality = prompt("enter your nationality");
var gender = prompt("enter your gender");
var age = +prompt("entter your age");


if (nationality == "pakistani" || nationality == "indian") {
    if (gender == "male" && age > 18) {
        alert("You are eligible to vote")
    }
    else if (gender == "female" && age > 18) {
        var marriage = prompt("Are you married?")
        if (marriage == "yes") {
            alert("You are eligible to vote")
        }
        else {
            alert("You are not eligible to vote")
        }
    }
    else {
        alert("You are not eligible to vote")
    }
}
else {
    alert("You are not eligible to vote")
}

if (age <= 18) {
    alert('your is age is less than 18 u can not vote')
}