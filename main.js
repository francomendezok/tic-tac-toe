const box = document.querySelectorAll(".box");
const restart = document.getElementById("restart");
const container = document.getElementById("container");
const description = document.getElementById("description");
const arrayOfBoxes =  Array.from(box);

// Module //
const gameBoard = (() => {
    let game = [];
    let winner = false;

    const checkWinner = () => {
        const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5], 
          [6, 7, 8], 
          [0, 3, 6], 
          [1, 4, 7],
          [2, 5, 8], 
          [0, 4, 8], 
          [2, 4, 6], 
        ];
      
        for (const combination of winningCombinations) {
          const [a, b, c] = combination;
          if (game[a] && game[a] === game[b] && game[a] === game[c]) {
            changeTurn();
            description.textContent = `Winner Player ${getPlayer()}`;  
            restart.className = "animated";
            gameBoard.winner = true; 
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
    const render = () => {
        arrayOfBoxes.forEach((box, index) => {
            box.innerHTML = gameBoard.game[index] || "";
            box.className = "display";
        }); 
        if (gameBoard.game.length === 9 && !gameBoard.game.includes(undefined)) {
            description.textContent = "It's a Draw";
            restart.className = "animated";
        }
        gameBoard.checkWinner(); 
    };

    return {
        game,
        getTurn,
        changeTurn,
        checkWinner,
        winner,
        render
    };
})();






    box.forEach((box, index) => {
        box.addEventListener("click", function () {
            if (!box.innerHTML) {

                if (gameBoard.getTurn() === "Player 1's turn") {
                    if (!gameBoard.winner)  {
                        gameBoard.game[index] = "X";
                        gameBoard.changeTurn();
                        gameBoard.render();
                    } 
                }
                else {
                    if (!gameBoard.winner)  {
                    gameBoard.game[index] = "O";
                    gameBoard.changeTurn();
                    gameBoard.render();
                    } 
                }
            }  
        });
    });


    restart.addEventListener("click", () => {
        gameBoard.game.splice(0, gameBoard.game.length);
        gameBoard.render();
        description.textContent = "Player 1's turn";
        restart.classList.remove("animated");
        gameBoard.winner = false;
    })

