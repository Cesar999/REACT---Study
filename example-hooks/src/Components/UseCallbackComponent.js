import React, { useState, useCallback, useEffect } from 'react';
import './UseCallbackComponent.css';

function ListItems({updateItems, msg}){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(updateItems());
        console.log('Rendering items '+ msg + ' - UseCallbackComponent');
    },[updateItems, msg]);

    return (
        <div className="list">
            {items.map(item => <div key={item}>{item}</div>)}
        </div>
    )
}

function UseCallbackComponent(){
    const [number, setNumber] = useState(1);
    const [toggle, setToggle] = useState(true);

    const increaseItems = useCallback(() => {
        return [number, number+1, number+2];
    },[number]);

    const decreaseItems = () => {
        return [number, number-1, number-2];
    };

    return (
        <div className="UseCallbackComponent">
            <h1>UseCallback</h1>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>

            <button onClick={()=>setToggle(!toggle)}>Toggle</button>

            <hr/>
            <ListItems updateItems={increaseItems} msg={'useCallback'}/>
            <hr/>
            <ListItems updateItems={decreaseItems} msg={'NO useCallback'}/>
            <hr />
            <br/>
            {toggle?<span>Toggle Me</span>:null}
        </div>
    )
}

export default UseCallbackComponent;