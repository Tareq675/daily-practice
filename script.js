//document.getElementById("demo3").innerHTML = "<h6>hello java script</h6>";
//alert("!")
let x, y, z;
x = 10;
y = 10;
z = x + y;
// console.log(z);
//------------------------------------

//declare array :
let products = ["Milk Powder", "Orange Tank", "Chocolet"];
let number = [10, 15, 20, 30, 50];
// console.log(number);

// console.log(products);
// products.push("Dates");
// products.push("Olive Oil", "Showder Gel");
// console.log(products);
// products.pop();
// console.log(products);
// products.unshift("pen", 15);
// console.log(products);
// products.shift();
// console.log(products);
// products[0] = 15;
// console.log(products);

// let arrayConcat = products.concat(number);
// console.log(arrayConcat);

// for of loop

// for (let product of products) {
//   console.log(product);
// }

// for (let i = 0; i < products.length; i++) {
//   console.log(i);
// }

// let car = {};

// car["passenger quantity"] = 5;
// console.log(car);
// console.log(car["passenger quantity"]);

//get all most small number from a array
let num = [10, 1, 50, 100];
let smallNum = Math.min(...num);
// console.log(num);
// console.log(smallNum);

//get all most big number from a array
let bigNum = Math.max(...num);
// console.log(bigNum);

let otp = "";
for (let i = 0; i < 4; i++) {
  otp = otp + Math.floor(Math.random() * 10);
}
console.log(otp);
