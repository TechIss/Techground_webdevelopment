//Variabelen
// knoppen, de knoppen moeten werken, en de ingevulde value moet getoond worden in de ledscherm.
// De value in het scherm moet met elkaar kunnen "rekenen"
// Als je op de "=" teken drukt moet de uitkomst in totaal in de scherm moeten komen.

//stap 1: functie: wat heb ik nodig om de buttons aan te spreken in mijn html. 
// - Je kan al gelijk denken aan buttons. Hoe ga ik deze triggeren? Andere opdrachten gebruiken onclick()

//Heeft de buttons een id en kan ik dit verdelen?
//We hebben cijfers en mathematical equations.

//Varialbelen
// const textarea = document.getElementById('display_answer');
const resetten = document.getElementById("btn-clearInterval");

// let word = obj.querySelector('span').innerHTML;

//Hier heb ik de number buttons gedeclareed en het werkt in de console log.
function Numbs(val){
// result = document.getElementById('btn');  
val = parseInt(val);
document.getElementById("display_answer").value += val;
console.log(typeof(val));
console.log(val);
}


//Hier wil ik de equation buttons laten werken
function equations(val) {
  // console.log(val);
  //+= onthoudt het vorige value en plaats de volgende er naast.
  document.getElementById("display_answer").value += val;
  console.log(typeof(val));
  console.log(val);
  //Er mag alleen 1 equation komen te staan
}

function PlusMinus() {
  let nummer = document.getElementById("display_answer");
  let x = nummer.value;
  x =+ x * -1;
  nummer.value = x;

  //werkt niet bij de 2e nummer
  // result = function () {
  //   document.getElementById("display_answer").innerText * -1;
  // }

  console.log(nummer.value);
}


function Answer() {
  // value = document.getElementById("display_answer").value;
  document.getElementById("display_answer").value = eval(document.getElementById("display_answer").value);
  // console.log(Answer.innerText);

  //laten we eerst kijken of we de functies in een string kan plaatsen:
  //de string bestaat uit een value van Numbs + de equation value + Numbs value (" 8 + 8 ") Check
  
  // console.log(Answers);
  //Als ik klik op = moet hij de ingevulde cijfers berekenen.
}


//Hier wil ik mijn C
 function reset(){
  document.getElementById("display_answer").value = document.querySelector("reset");
  
  let text = "C";
  document.getElementById("resetButton").value = text;

 }

// function Calculator (){
//   Numbs;
//   equations;
// }


//button value moet in de inputfield komen te staan