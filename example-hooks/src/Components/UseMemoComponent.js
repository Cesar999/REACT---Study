import React, { useState, useMemo } from 'react';
import './UseMemoComponent.css';

function expensiveOperation1(x, y) {
    // only when values change and 1st render
    console.log('calc with memoization - UseMemoComponent');
    return x + y;
}
function expensiveOperation2(x, y) {
    // on every render
    console.log('calc with no memoization - UseMemoComponent');
    return x + y;
}

function UseMemoComponent(){
    const [param1, setParam1] = useState(1);
    const [param2, setParam2] = useState(2);
    const [toggle, setToggle] = useState(true);
    const memoizedValue = useMemo(() => expensiveOperation1(param1, param2), [param1, param2]);
    const noMemoizedValue =  expensiveOperation2(param1, param2);

    return (
        <div className="UseMemoComponent">
            <h1>UseMemo</h1>
            <p>
                <strong>Param1:</strong> {param1} &nbsp;
                <strong>Param2:</strong> {param2} 
            </p>
            <p>
                <strong>memoizedValue:</strong> {memoizedValue} &nbsp;
                <strong>noMemoizedValue:</strong> {noMemoizedValue}
            </p>
            <button onClick={()=>setParam1(param1+1)}>Increase Param1</button>
            <button onClick={()=>setParam1(param1-1)}>Decrease Param1</button>
            <button onClick={()=>setParam2(param2+1)}>Increase Param2</button>
            <button onClick={()=>setParam2(param2-1)}>Decrease Param2</button>

            <br/>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
            {toggle?<p>Toggle Me</p>:null}
        </div>
    )
}

export default UseMemoComponent;