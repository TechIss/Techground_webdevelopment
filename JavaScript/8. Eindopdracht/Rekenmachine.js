//Variabelen
// knoppen, de knoppen moeten werken, en de ingevulde value moet getoond worden in de ledscherm.
// De value in het scherm moet met elkaar kunnen "rekenen"
// Als je op de "=" teken drukt moet de uitkomst in totaal in de scherm moeten komen.

//stap 1: functie: wat heb ik nodig om de buttons aan te spreken in mijn html. 
// - Je kan al gelijk denken aan buttons. Hoe ga ik deze triggeren?

//Heeft de buttons een id en kan ik dit verdelen?
//We hebben cijfers en mathematical equations.

//Varialbelen
let outputField = document.getElementById("answers").innerText;
// let word = obj.querySelector('span').innerHTML;

//Hier heb ik de number buttons gedeclareed en het werkt in de console log.
function Numbs(val){
result = document.getElementById('btn');  
result.value = outputField; 
clearInput;
//   result.value = result.value? parseInt(result.value) + parseInt(val) : parseInt(val); 
   console.log(val);
}

//Hier wil ik de equation buttons laten werken
 function equations(val) {
   result = document.getElementById('btn-equations');  
   console.log(val);
   clearInput;
 }
//Hier wil ik mijn C
 function clearInput(){
   text = " ";
   clearInput.innerHTML = text;
 }




//button value moet in de inputfield komen te staan

   //Hier probeer ik de inputfield te veranderen.
   //   function Answer(){
   //      let field = document.getElementById('answers').innerHTML;
   //   }