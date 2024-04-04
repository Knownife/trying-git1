

import {useState} from "react";

function MathActionns(){
    let [count,setCount]=useState(0);

    let increment = ()=>{
        setCount(prevCount => prevCount + 1 )
        setCount(prevCount => prevCount + 1 )
    }
    let decrement = ()=>{
        setCount(prevCount => prevCount - 1 )
    }
    let reset = ()=>{
        setCount(prevCount => prevCount = 0 )
    }

    return <div>
        <h1>Our count: {count}</h1>
        <br/>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

    </div>
}

export default MathActionns;