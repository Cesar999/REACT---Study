import './Functional.css';

function Functional(props){
    return (
        <div className="Functional">
            <h1>I am a Functional Component</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Functional;