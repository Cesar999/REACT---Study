import React, {useState} from 'react';

function Button(props){
    const [value, setValue] = useState('');
    const handleClick = () => {
        setValue('');
    };
    return (
        <>
            <label htmlFor={`button-${props.label}`}>{props.label}</label>
            <button data-testid="button-component" id={`button-${props.label}`} onClick={handleClick}>{props.label}</button>
        </>
    )
}

export default Button;