//voorbeeld
        //string concatenation
        let firstName = 'Brandon';
        let lastName = 'Sanderson';
        
        let fullName = firstName + ' ' + lastName;
        console.log(fullName);
        
        //getting characters
        console.log(fullName[0]);

//opdracht 1
let getal1;
console.log("getal1" + getal1);

//opdracht 2.1
// let getal2;
// console.log("getal2" + getal2);

//opdracht 2.2
let getal2 = 2;
console.log("getal2" + getal2);

// //opdracht 3
// let getal3 = 3;
// console.log("getal3" + getal3);

// //opdracht 4
let getal3 = 5;
console.log("getal3" + getal3);

//opdracht 5
let datatype = 'true';  
console.log("datatype" + typeof datatype);

//opdracht 6.b
let getal = 2;
console.log("getal2" + getal2);

//opdracht 6.c
// alert(1n + 2n); // 3

// alert(5n / 2n); // 2

//opdracht 6.d
let id1 = Symbol("id");
let id2 = Symbol("id");

// alert(id1 == id2); // false

//opddracht 7
let getal6 = 6;
let getal8 = 8;

console.log(getal6 + getal8);
console.log(getal8 - getal6);
console.log(getal6 * getal8);
console.log(getal8 / getal6);

//opdracht 8
let som = 27;
console.log(som);


//opdracht 9
// let number = 3;
// number--;

// console.log(number--);

// let number = 3;
// const sum = number++ + 2;
// console.log(sum);

// let number = 3;
// const sum = ++number + 2;
// console.log(sum);

//opdracht 10
// let number = 3;
// number += 4;
// console.log(number);

//opdracht 11
// let number = 3;
// number += 4;
// number -= 2;
// number /= 5;
// number *= 4;
// console.log(number);

//Opdracht 12
let name1 = 'voornaam';
let name2 = 'achternaam';

console.log(name1 + ' ' + name2);

//opdracht 13
let value = '3';
let number = 3 ;

let combinedText = (value + number);

console.log(combinedText)

//opdracht 14
let testText = 'I am a text "this text is double quoted" this part is not';
console.log(testText)

//opdracht 15
// let text = "text";
// text += "another text";

let tekst1 = 'text';
let tekst2 = 'another text';

let text = (tekst1 + tekst2)
console.log(text);

//opdracht 16.1
let anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 3   is '" + anyString.charAt(3)   + "'");
console.log("The character at index 4   is '" + anyString.charAt(4)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");


//opdracht 16.2
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"


//opdracht 16.3
// let email = "issakarissefabiala@gmail.com";
// let result = email.slice(0,5);

// console.log(result);

//opdracht 16.4
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

//opdracht 16.5
let email = 'mario@thenetninja.co.uk';
let result = email.substr(4, 10);
// this is slightly different than slice, because it it will start at the position that is stated in the first argument, but it will count to 10 characters further.
//so the position is 4 to 14. Because it counts to 10.
console.log(result);




