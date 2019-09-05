import React from 'react';

export interface SquareProps {onClick: (i: any) => void, value: string}

// Function components style
export function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
