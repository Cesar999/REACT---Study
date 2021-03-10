import './Todo.css';

function Todo(props){
    let style = {};
    if(props.done){
        style = {textDecoration: 'line-through', color: 'grey'};
    } 
    return (
        <div className="Todo" style={style} >
            <input type="checkbox" onChange={()=>props.completeTodo(props.id)}/>
            <span className="id"><strong>ID: </strong>{props.id}</span>
            <span className="text"><strong>TODO: </strong>{props.text}</span>
            <span className="date"><strong>DATE: </strong>{props.date}</span>
            <button onClick={()=>props.deleteTodo(props.id)} className="delete">X</button>
        </div>
    )
}
export default Todo;