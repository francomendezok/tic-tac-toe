const box = document.querySelectorAll(".box");
const restart = document.getElementById("restart");
const container = document.getElementById("container");
const description = document.getElementById("description");
const arrayOfBoxes =  Array.from(box);

// Module //
const gameBoard = (() => {
    let game = [];
    let players = {};
    let gameFlow = {};
    const getTurn = () => {
        return description.textContent
    }
    const changeTurn = () => {
        if (description.textContent === "Player 1's turn") {
            description.textContent = "Player 2's turn";
        }
        else {
            description.textContent = "Player 1's turn"
        }
        return description.textContent;
    }

    return {
        game,
        getTurn,
        changeTurn,
    };
})();


// Factory Function with Closure //
const Player = (player, icon) => {
    
    return {player, icon}
}

const player1 = Player(1, "X");
const player2 = Player(2, "O");


function render () {
    arrayOfBoxes.forEach((box, index) => {
        box.innerHTML = gameBoard.game[index] || "";
        box.className = "display";
      }); 
}



    box.forEach((box, index) => {
        box.addEventListener("click", function () {
            if (!box.innerHTML) {

                if (gameBoard.getTurn() === "Player 1's turn") {
                    gameBoard.game[index] = "X";
                    gameBoard.changeTurn();
                    render();
                }
                else {
                    gameBoard.game[index] = "O";
                    gameBoard.changeTurn();
                    render();
                }
            }  
        });
    });


    restart.addEventListener("click", () => {
        gameBoard.game.splice(0, gameBoard.game.length);
        render();
        description.textContent = "Player 1's turn";
    })

    // Check if there is a winner or it is a draw and print it on the description parragraph // 