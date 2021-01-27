//Variabelen
// knoppen, de knoppen moeten werken, en de ingevulde value moet getoond worden in de ledscherm.
// De value in het scherm moet met elkaar kunnen "rekenen"
// Als je op de "=" teken drukt moet de uitkomst in totaal in de scherm moeten komen.

//stap 1: functie: wat heb ik nodig om de buttons aan te spreken in mijn html. 
// - Je kan al gelijk denken aan buttons. Hoe ga ik deze triggeren? Andere opdrachten gebruiken onclick()

//Heeft de buttons een id en kan ik dit verdelen?
//We hebben cijfers en mathematical equations.

//Varialbelen
const textarea = document.getElementById('display_answer');
const resetten = document.getElementById("btn-clearInterval");

// let word = obj.querySelector('span').innerHTML;

//Hier heb ik de number buttons gedeclareed en het werkt in de console log.
function Numbs(val){
result = document.getElementById('btn');  
val = parseInt(val);
document.getElementById("display_answer").value= val;
console.log(typeof(val));

}

//Hier wil ik de equation buttons laten werken
function equations(val) {
  result = document.getElementById('btn-equations');  
  console.log(val);
  document.getElementById("display_answer").value= val;
}

//Hier wil ik mijn C
//  function reset(){
//   result = document.getElementById('equations').innerHTML = text;

//    text = 0;
//  }

// function Calculator (){
//   Numbs;
//   equations;
// }


//button value moet in de inputfield komen te staan