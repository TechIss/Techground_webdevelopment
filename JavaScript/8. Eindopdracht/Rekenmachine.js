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
  //+= moet het value in de box zetten
  document.getElementById("display_answer").value += val;
  console.log(typeof(val));
  console.log(val);
}

function PlusMinus() {
  let nummer = document.getElementById("display_answer").innerText;
  console.log(nummer);
}


function Answer() {
  document.getElementById("display_answer").value = eval(document.getElementById("display_answer").value);

  //laten we eerst kijken of we de functies in een string kan plaatsen:
  //de string bestaat uit een value van Numbs + de equation value + Numbs value (" 8 + 8 ") Check
  
  // document.getElementsByClassName("Answers").value = Numbs.value + equation + Numbs.val ;
  // console.log(Answers);
  //Hier moer ik het = value aanspreken
  // obj.querySelector("=") = Answer;   
  // Answer = Numbs.val && equations.val && Numbs.val;
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