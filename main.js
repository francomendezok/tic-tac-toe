// Module //
const gameBoard = (() => {
    let game = ["X","O","X","O"];
    let players = {};
    let gameFlow = {};

    return {
        game
    };
})();



// Factory Function with Closure //
const Player = (player, icon) => {
    
    return {player, icon}
}

const player1 = Player(1, "X");
const player2 = Player(2, "O");

function render () {
    for (let i = 0; i < gameBoard.game.length; i++) {
        box[i].innerHTML += gameBoard.game[i];
        box[i].className = "display";
        
    }
}

const box = document.querySelectorAll(".box");
const restart = document.getElementById("restart");
const container = document.getElementById("container");

// Develop feature that add x or o into the array and print it //
    box.forEach((box, index) => {
        box.addEventListener("click", function () {
            box.style.backgroundColor = "red";
        })
    });




render();
