import React from "react";
import SingleSquare from "./SingleSquare";


export default function SixSquares (props) {

    const word = props.word

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <SingleSquare word={word} index={0} />
            <SingleSquare word={word} index={1} />
            <SingleSquare word={word} index={2} />
            <SingleSquare word={word} index={3} />
            <SingleSquare word={word} index={4} />
            <SingleSquare word={word} index={5} />
        </div>
    )
}