import {useState, useEffect} from 'react';
import './UseEffectListener.css';

function UseEffectListener() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
  
    // logs when componentDidMount
    // logs when count2 changes
    useEffect(() => {
      console.log("count2 changed - UseEffectListener");
    }, [count2]);
  
    return (
      <div className="UseEffectListener">
        <h1>UseEffectListener</h1>
        {count1} {count2} {count3}
        <br />
        <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
        <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
        <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
      </div>
    );
  }

export default UseEffectListener;