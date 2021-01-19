//object
const board = {
    player1: "X",
    player2: "O",
    currentTurn: "X"
}

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]


function play (tileNr){
    console.log (tileNr);
    if (board.currentTurn == board.player1) {
        document.getElementById(tileNr).innerText = "X";
        board.currentTurn = board.player2;  
    } else {
        document.getElementById(tileNr).innerText = "O";
        board.currentTurn = board.player1;
    }

    //controleer of iemand heeft gewonnen: een loop
    for(let i=0; i<winningConditions.length; i++) {
        console.log(winningConditions[i]);
        console.log(winningConditions[i][1]);
        console.log(winningConditions[i][2]);

        if  (document.getElementById(winningConditions[i][0]).innerText === board.player1&& 
            document.getElementById(winningConditions[i][1]).innerText === board.player1 &&
            document.getElementById(winningConditions[i][2]).innerText === board.player1) {
                //hier vergelijk je een getal met een "string x"
                //welke waarde heeft het boxje een kruisje of rondje
                console.log("player has won")
                
        }
    }

}