// Opdracht 1
let numbers = [];

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (numbers[2]);


//opdrachten 2
let fruiten = [];

fruiten = ['peer', 'appel', 'banaan', 'kersen', 'aardbei'];

console.log (fruiten[1]);

//opdracht 3
// const fruit = fruiten.indexOf("appel");
// console.log(fruit);

// //opdracht 4
const fruit = fruiten.indexOf("aardbei");
// console.log(fruit);

//opdracht 5

const randomNumber = numbers[Math.round(Math.random() *4)];
console.log(randomNumber);

let randomFruit = fruiten;
console.log (randomFruit[randomNumber]);

let a = randomNumber % fruiten.length;
console.log(a);

// fruits= numbers % fruiten;


// document.getElementById("randomFruiten").innerHTML = fruits;
// console.log(randomFruit);

//opdracht 6
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

// function myFunction() {
// fruits.shift();
// document.getElementById("demo").innerHTML = fruits;
// }

// 6.5 splice()
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

// function myFunction() {
// fruits.splice(2, 0, "Lemon", "Kiwi");
// document.getElementById("demo").innerHTML = fruits;
// }

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

function myFunction() {
fruits.sort();
document.getElementById("demo").innerHTML = fruits;
}

//Opdracht 7
console.log(fruiten.length);



