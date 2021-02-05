const container = document.getElementById("container1");
const hexagons = 70;


for (let i = 0; i < hexagons; i++) {
    const items = document.createElement('div');
    items.classList.add('hexagon1');
    container1.appendChild(items);
}

function getHexagon () {
    return items;
}

let cursor = document.getElementById('cursor');
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}