import React from "react";
import SingleSquareForHard from "./SingleSquareForHard";


export default function SixSquares (props) {

    const word = props.word

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <SingleSquareForHard word={word} index={0} />
            <SingleSquareForHard word={word} index={1} />
            <SingleSquareForHard word={word} index={2} />
            <SingleSquareForHard word={word} index={3} />
            <SingleSquareForHard word={word} index={4} />
            <SingleSquareForHard word={word} index={5} />
            <SingleSquareForHard word={word} index={6} />
        </div>
    )
}