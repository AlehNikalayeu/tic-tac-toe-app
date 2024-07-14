import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
    return (
        <div className="game">
            <h1 className="game-title">Tic Tac Toe</h1>
            <Board />
            <div className="footer">Created by <span className="author-name">Aleh Nikalayeu</span></div>
        </div>
    );
};

export default App;
