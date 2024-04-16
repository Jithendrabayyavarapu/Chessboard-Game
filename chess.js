let currentPlayer = 1; // 1 for Player 1, 2 for Player 2
let selectedPiece = null;
let moves = [];

function startGame() {
    const player1Name = prompt("Enter username for Player 1:");
    const player2Name = prompt("Enter username for Player 2:");

    console.log(`Game started between ${player1Name} and ${player2Name}`);
    alert(`Game started between ${player1Name} and ${player2Name}`);
}

document.getElementById("chessBoard").addEventListener("click", function (event) {
    const clickedSquare = event.target;

    if (clickedSquare.classList.contains("square")) {
        if (selectedPiece) {
            // Handle piece movement logic here
            const move = { from: selectedPiece, to: clickedSquare };
            movePiece(selectedPiece, clickedSquare);
            moves.push(move);
            selectedPiece.classList.remove("selected");
            selectedPiece = null;
            currentPlayer = currentPlayer === 1 ? 2 : 1; // Switch players
        } else {
            // Handle piece selection logic here
            if (isValidSelection(clickedSquare)) {
                selectedPiece = clickedSquare;
                selectedPiece.classList.add("selected");
            }
        }
    }
});

function isValidSelection(square) {
    // Add your logic to check if the selected piece belongs to the current player
    // You may also check if there are valid moves for the selected piece
    // For simplicity, let's assume all pieces can be selected for now
    return true;
}

function movePiece(fromSquare, toSquare) {
    // Preserve the color of the moved piece
    const pieceColor = fromSquare.classList.contains("silver") ? "silver" : "black";

    toSquare.innerHTML = fromSquare.innerHTML;
    toSquare.classList.add(pieceColor); // Set the color of the moved piece
    fromSquare.innerHTML = "";
    fromSquare.classList.remove("silver", "tophookwhite", "topknightwhite", "topwhiteoawn"); // Remove the previous piece class
}

document.getElementById("resetButton").addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    // Reset the chessboard to the initial state
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.innerHTML = "");
    moves = []; // Clear the moves array
}

document.getElementById("backButton").addEventListener("click", function () {
    moveBack();
});

function moveBack() {
    // Implement logic to move back one step
    if (moves.length > 0) {
        const lastMove = moves.pop();
        movePiece(lastMove.to, lastMove.from);
    }
}

// Additional game logic and functions can be added based on your requirements.
