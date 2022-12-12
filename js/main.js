console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Jacob Nordstrom
200368110
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array
const arr = [];

// Step 3: Add the 3 people's names to the array
arr.push("Jacob", "Shaun", "Bob")
console.log(arr);

// Step 4: Remove the second array item from the array
arr.splice(1, 1);
console.log(arr);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let arrUpper = arr.map(function (item){
    return item.toUpperCase();
})
console.log(arrUpper);

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
document.querySelector('aside').querySelector('h2').addEventListener('click', function(){
    alert('Hello from Boo the World\'s Cutest Dog!');
});