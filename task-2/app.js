var familyMembers = +prompt("enter your family members", "enter ur family members");
var fitranaMethod = prompt("choose fitrana method\n (a).wheat= Rs 250 \n (b). dates= Rs 2100\n  (c).Balary=Rs450\n (d).raisins ")

var Wheat = 250 * familyMembers;
var Dates = 2100 * familyMembers;
var Barley = 450 * familyMembers;
var Rasins = 2800 * familyMembers;





if (fitranaMethod == "wheat") {
    alert("The total fitrah amount of your family is: " + Wheat);
}



var dates = 2100;
if (fitranaMethod == "dates") {
    alert("The total fitrah amount of your family is: " + dates);
}
var Balary = 450;
if (fitranaMethod == "Balary") {
    alert("The total fitrah amount of your family is: " + Balary);
}
var raisins = 1800;
if (fitranaMethod == "raisins") {
    alert("The total fitrah amount of your family is: " + raisins);
}








