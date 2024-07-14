import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from './Square';
import { makeMove, resetGame } from '../redux/actions';

const Board = () => {
    const board = useSelector(state => state.board);
    const xIsNext = useSelector(state => state.xIsNext);
    const winner = useSelector(state => state.winner);
    const winningLine = useSelector(state => state.winningLine);
    const dispatch = useDispatch();

    const handleClick = (index) => {
        dispatch(makeMove(index));
    };

    const renderSquare = (index) => {
        return (
            <Square
                value={board[index]}
                index={index}
                onClick={() => handleClick(index)}
                winningSquare={winningLine && winningLine.includes(index)}
            />
        );
    };

    const status = winner ? `Winner: ${winner}` : board.every(square => square) ? 'Draw!' : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="game-board">
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <button className="reset-button" onClick={() => dispatch(resetGame())}>
                Reset Game
            </button>
        </div>
    );
};

export default Board;
