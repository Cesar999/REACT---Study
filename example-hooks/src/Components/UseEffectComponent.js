import {useState, useEffect} from 'react';
import './UseEffectComponent.css';

function LifecycleDemo(props) {
    // Pass useEffect a function
    useEffect(() => {
      // This gets called after every render, by default
      // (the first one, and every one after that)
      console.log('render - UseEffectComponent');
  
      // If you want to implement componentWillUnmount,
      // return a function from here, and React will call
      // it prior to unmounting.
      return () => console.log('unmounting...');
    })
  
    return `lifecycle random: ${props.random} - UseEffectComponent`;
  }
  
  function getRandom(){
      return (Math.random()*100).toFixed(2);
  }

  function UseEffectComponent() {
    const [random, setRandom] = useState(getRandom());
    const [mounted, setMounted] = useState(true);
  
    const reRender = () => setRandom(getRandom());

    const toggle = () => setMounted(!mounted);
  
    return (
      <div className="UseEffectComponent">
        <h1>UseEffectComponent</h1>
        <button onClick={reRender}>Re-render</button>
        <button onClick={toggle}>Show/Hide LifecycleDemo</button>
        <br/>
        {mounted && <LifecycleDemo random={random}/>}
      </div>
    );
  }

export default UseEffectComponent;