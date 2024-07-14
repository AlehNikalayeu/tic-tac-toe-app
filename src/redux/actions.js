export const makeMove = (index) => {
    return {
        type: 'MAKE_MOVE',
        payload: index
    };
};

export const resetGame = () => {
    return {
        type: 'RESET_GAME'
    };
};
