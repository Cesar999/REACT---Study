import {useState} from 'react';
import './UseStateComponent.css';

function UseStateComponent() {
    const [value, setValue] = useState('Ricardo');
    const [text, setText] = useState('is Awesome');

    const handleSelect = (e) => {
        setValue(e.target.value);
    }

    const handleInput = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="UseStateComponent">
            <h1>UseStateComponent</h1>
            <h2>{value} {text}</h2>
            <select onChange={handleSelect} value={value}>
                <option value="Cesar">Cesar</option>
                <option value="Leslie">Leslie</option>
                <option value="Ricardo">Ricardo</option>
                <option value="Manuel">Manuel</option>
                <option value="Ana">Ana</option>
                <option value="Maria">Maria</option>
                <option value="Manolo">Manolo</option>
            </select>
            <input onChange={handleInput} value={text}/>
        </div>
    );
}

export default UseStateComponent;
