import React, { useState } from "react";
import Square from "./square";

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setisXTurn] = useState(true);

    const handleClick = (index) => {
        if (state[index] || winnerScenario()) {
            return; // Ignore if there's already a mark or if the game is won
        }
        const cloneState = [...state];
        cloneState[index] = isXTurn ? 'X' : 'O';
        setState(cloneState);
        setisXTurn(!isXTurn)
    }

    const winnerScenario = () => {
        const matrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let element of matrix) {
            const [a, b, c] = element;
            if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    const winner = winnerScenario();
    const reset = state.every(value => value !== null);
    const status = winner ? `Winner is : ${winner}` : reset ? `No winners this time. It's a tie!` : `Next player : ${isXTurn ? 'X' : 'O'}`

    // Inline style for the status message
    const statusStyle = {
        color: winner
            ? '#28a745'
            : reset
                ? 'chocolate'
                : '#007bff',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px'
    };

    const resetGame = () => {
        setState(Array(9).fill(null));
        setisXTurn(true);
    };

    return (
        <div className="container">
            <div className="status" style={statusStyle}>{status}</div>
            <div className="board-row">
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
            {(winner || reset) && (
                <button className="reset-button" onClick={resetGame}>
                    Restart
                </button>
            )}
        </div>
    );
};

export default Board;