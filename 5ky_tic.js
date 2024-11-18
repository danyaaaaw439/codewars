function isSolved(board) {

    const checkWin = (player) => {

        for (let i = 0; i < 3; i++) {
            if (board[i].every(cell => cell === player)) return true; 
            if (board.every(row => row[i] === player)) return true;   
        }

        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

        return false;
    };

    if (checkWin(1)) return 1;

    if (checkWin(2)) return 2;

    if (board.some(row => row.includes(0))) return -1;


    return 0;
}