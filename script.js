const array = [];

let numbox = document.querySelectorAll('.num-box');
let xpoint = document.querySelector('#xpoint');
let opoint = document.querySelector('#opoint');
let turn = document.querySelector('#turn');

numbox.forEach(function(element, index) {
    element.addEventListener('click', function() {
        if (element.innerHTML === "") {
            if (turn.classList.contains('fa-o')) {
                turn.classList.remove('fa-o');
                turn.classList.add('fa-x');
                element.innerHTML = "O";
                array[index] = "O";
            } else if (turn.classList.contains('fa-x')) {
                turn.classList.remove('fa-x');
                turn.classList.add('fa-o');
                element.innerHTML = "X";
                array[index] = "X";
            }

            if (checkWin("O")) {
                alert("O won the Game!");
                opoint.innerHTML = 1 + parseInt(opoint.innerHTML);
                resetGame();
            } else if (checkWin("X")) {
                alert("X won the Game!");
                xpoint.innerHTML = 1 + parseInt(xpoint.innerHTML);
                resetGame();
            } else if (array.length === 9 && !array.includes(undefined)) {
                alert("It's a draw!");
                resetGame();
            }
        }
    });
});

function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];
    return winConditions.some(condition =>
        condition.every(index => array[index] === player)
    );
}

function resetGame() {
    array.length = 0;  // Clear the array
    numbox.forEach(e => e.innerHTML = "");  // Clear the board
    turn.classList.remove('fa-o');
    turn.classList.add('fa-x');
}

document.querySelector("#refresh").addEventListener('click', function() {
    resetGame();
});
