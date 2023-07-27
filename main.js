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

    const checkWinner = () => {
        const winningCombinations = [
          [0, 1, 2], // Primera fila
          [3, 4, 5], // Segunda fila
          [6, 7, 8], // Tercera fila
          [0, 3, 6], // Primera columna
          [1, 4, 7], // Segunda columna
          [2, 5, 8], // Tercera columna
          [0, 4, 8], // Diagonal de izquierda a derecha
          [2, 4, 6], // Diagonal de derecha a izquierda
        ];
      
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (game[a] && game[a] === game[b] && game[a] === game[c]) {
            changeTurn();
            description.textContent = `Winner Player ${getPlayer()}`;           
        }
    }
      };
      
    const getPlayer = () => {
        if (description.textContent.includes("1")) return 1;
        else return 2;
    }
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
        checkWinner
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
    
    gameBoard.checkWinner();
        
};




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