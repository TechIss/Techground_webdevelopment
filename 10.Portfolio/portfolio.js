const containerOctagon = document.getElementById("containerOctagon");
const Octagons = 1503;
const color = [
    '#083c40',
    '#3d575b',
    '#6b898b'
];

for (let i = 0; i < Octagons; i++) {
    const items = document.createElement('div');
    items.classList.add('Octagon');
    items.addEventListener('mouseover', () => setColor(items));
    items.addEventListener('mouseout', () => removeColor(items));
    containerOctagon.appendChild(items);
}

function setColor (element){
    const colors = getRandomColor();
    element.style.boxShadow = `0 0 2px ${colors}`;
    element.style.background = colors;
}

function removeColor (element){
    element.style.background = "";
    console.log(removeColor);
}


function getRandomColor () {
    return color [Math.floor(Math.random()*color.length)]
}




