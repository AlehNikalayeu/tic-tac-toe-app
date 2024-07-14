import React from 'react';

const Square = ({ value, onClick, winningSquare }) => {
    return (
        <button className={`square ${winningSquare ? 'winning-square' : ''}`} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
