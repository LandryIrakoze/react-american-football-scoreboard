import React, {useEffect,useState} from "react";
import "./App.css";

export default function Timer() {
    const [ timer, setTimer ] = useState(0)

    useEffect(() => {
        const timerID = setInterval(() => setTimer(timer + 1), 100)
        

    })

    return (
        <div className="timer">{timer}</div>
    )
}