import React from 'react';

export interface GameMoveProps {step: number, onClick: (move: number) => void}

export function GameMove(props: GameMoveProps) {
    const desc = props.step ?
        'Go to move #' + props.step :
        'Go to game start';
    return(
        <li key={props.step}>
            <button onClick={() => props.onClick(props.step)}>{desc}</button>
        </li>
    );
}
