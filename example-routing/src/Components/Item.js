import './Item.css';

function Item(props){
    return (
        <div className="Item">
            <p className="title"><strong>Title: </strong>{props.title}</p>
            <p className="quote"><strong>Quote: </strong>{props.quote}</p>
            <img width="200px" src={props.url} alt={props.title}></img>
        </div>
    )
}

export default Item;