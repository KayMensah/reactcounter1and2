
import './App.css';
// import React from 'react';
import React, { useState } from "react";

function App2() {
    const [number, setNumber] = useState(0);

    const addOne = () => {
        setNumber(number + 1);

    };
    const minusOne = () => {
        setNumber(number -1);
    };



    return(
        <div className="App">
            <h1>{number}</h1>
            <button onClick={addOne}>Add 1</button>
            <button onClick={minusOne}>Minus 1</button>

        </div>
    )
}

export default App2;