import React, { useContext } from "react";
import { normalContext } from "./NormalProvider";
import './SingleSquare.css'


const secrectWords = ["memory", "avenue", "hardly",
                    "planet", "review", "secret",
                    "ticket", "valley", "wonder", "native"]

export default function SingleSquare (props) {

    const word = props.word
    const index = props.index
    const [round, setRound] = useContext(normalContext);
    let c = "default"
    const answer = secrectWords[round]

    if (word.length !== 0) {
        if (word[index] === answer[index]) {
            c = "green"
        } else if (answer.includes(word[index])) {
            let i = word.indexOf(word[index])
            if (i === index) {
            c = "yellow"
            } else {
                c = "grey"
            }
        } else {
            c = "grey"
        }
    }


    return (
            <div className={c}>{word[index]}</div>
    )
}