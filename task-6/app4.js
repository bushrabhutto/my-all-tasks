var products = ["shampoo", "creams", "cosmetics", "jewlery"];
alert(products)
var position = +prompt("how do you wanat to position ,enter sequence \n 0\n 1\n 2\n 3");


console.log("all items: " + products)
var ExcludedItem = products.splice(position, 1);


console.log("The removed item is: " + ExcludedItem)
console.log("The remaining items are: " + products)


if (position == 0) {
    products.splice(0);
    alert(products + " \n removed item");
}
if (position === 1) {
    products.splice(1);
    alert(products + " \n removed item");
}
if (position == 2) {
    products.splice(2);
    alert(products + " \n removed item");
}
if (position == 3) {
    products.splice(3);
    alert(products + " \n removed item");
}



