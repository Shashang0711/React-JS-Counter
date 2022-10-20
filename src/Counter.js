import React, { useState } from "react";
import "./index.css"

function Counter() {

    const [counter, setCounter] = useState(10);

    const increase = () => {
        setCounter(count => count + 1);

    }
    const decrease = () => {
        setCounter(count => count - 1)

    }
    const reset = () => {
        setCounter(10);
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <span className="counter_output">{counter}</span>
            <div className="btn_container">
                <button className="button" onClick={increase}>Add</button>
                <button className="button" onClick={decrease}>Sub</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
export default Counter;