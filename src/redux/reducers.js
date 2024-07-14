const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    winningLine: []
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAKE_MOVE':
            const { payload } = action;
            const board = state.board.slice();
            if (state.winner || board[payload]) {
                return state;
            }
            board[payload] = state.xIsNext ? 'X' : 'O';
            const result = calculateWinner(board);
            return {
                ...state,
                board,
                xIsNext: !state.xIsNext,
                winner: result ? result.winner : null,
                winningLine: result ? result.line : []
            };
        case 'RESET_GAME':
            return initialState;
        default:
            return state;
    }
};

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], line: lines[i] };
        }
    }
    return null;
}

export default gameReducer;

