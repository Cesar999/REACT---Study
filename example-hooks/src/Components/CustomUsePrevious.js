import {useState, useEffect, useRef} from 'react';
import './CustomUsePrevious.css';

function getRandom(){
    return (Math.random()*100).toFixed(2);
}

// custom hook for getting previous value 
function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    
    // Store current value in ref
    // useEffect is only called after the component is rendered with the previous value. Only after the render is done is the ref object updated within useEffect.
    useEffect(() => {
        console.log('use effect - CustomUsePrevious');
        ref.current = value;
    }, [value]); // Only re-run if value changes
    
    console.log('use previous - CustomUsePrevious'); // this is trigger before useEffect
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
  
  // the App where the hook is used 
  function CustomUsePrevious() {
    const [count, setCount] = useState(getRandom());
    // 👇 look here
    const prevCount = usePrevious(count);
    console.log(prevCount, 'CustomUsePrevious');
  
    return (<div className="CustomUsePrevious">
        <h1>CustomUsePrevious</h1>
        <h2>Now: {count}, before: {prevCount}</h2>
        <button onClick={()=>setCount(getRandom())}>Random Number</button>
    </div>);
}

export default CustomUsePrevious;