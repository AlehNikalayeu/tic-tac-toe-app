import './App.css';
import {useState} from "react";
import Board from "./components/Board";
import Square from "./components/Square";

function App() {

    const [board, setBoard] = useState(Array(9).fill(null));


    return (
        <div className="App">
            <h1>Tic Tac Toe Game</h1>
            <Board
                board={board}

            />

            <Square/>

        </div>
    );
}

export default App;
