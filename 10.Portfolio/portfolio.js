let cursor = document.getElementById('cursor');
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// const container = document.getElementById("containerHexagon");
// const hexagons = 1503;
// const color = [
//     '#083c40',
//     '',
//     '#3d575b',
//     '#6b898b'
// ];

// for (let i = 0; i < hexagons; i++) {
//     const items = document.createElement('div');
//     items.classList.add('hexagon');
//     items.addEventListener('mouseover', () => setColor(items));
//     items.addEventListener('mouseout', () => removeColor(items));
//     containerHexagon.appendChild(items);
// }

// function setColor (element){
//     const colors = getRandomColor();
//     element.style.boxShadow = `0 0 2px ${colors}`;
//     element.style.background = colors;
// }

// function removeColor (element){
//     element.style.background = "";
//     console.log(removeColor);
// }


// function getRandomColor () {
//     return color [Math.floor(Math.random()*color.length)]
// }






