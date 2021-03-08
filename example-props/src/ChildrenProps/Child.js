import './Child.css';

function Child(props){
    return(
        <div className="Child">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Child;