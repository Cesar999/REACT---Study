import {useRef} from 'react';
import './UseRefComponent.css';

function UseRefComponent() {
    const inputEl = useRef(null);
    const outputEl = useRef(null);
    const onButtonClick = () => {
      inputEl.current.focus();
      outputEl.current.textContent = inputEl.current.value;
    };
    return (
      <div className="UseRefComponent">
        <h1>UseRefComponent</h1>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <p><strong>Output:</strong> <span ref={outputEl}></span></p>
      </div>
    );
}

export default UseRefComponent;