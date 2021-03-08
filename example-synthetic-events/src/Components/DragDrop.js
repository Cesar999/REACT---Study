import React, {Component} from 'react';
import './DragDrop.css';

const Row = (props) => (<div className="row">{props.children}</div>);
const Column = (props) => (<div data-pos={props.pos} className="column dropzone">{props.children}</div>);
const Draggable = () =>(
    <div className="draggable" draggable="true">
        Drag Me 
    </div>);

class DragDrop extends Component {
    constructor(){
        super();
        this.state = {
            pos: '00'
        }
    }

    dragged = null;

    dragHandler = (event) => {
        event.target.style.opacity = 0;
    }

    dragStartHandler = (event) => {
        this.dragged = event.target;
        event.target.style.opacity = .5;
    }

    dragEndHandler = (event) => {
        event.target.style.opacity = "";
    }

    dragEnterHandler = (event) => {
        if (event.target.classList.contains('dropzone')) {
            event.target.style.background = "purple";
        }
    }

    dragLeaveHandler = (event) => {
        if (event.target.classList.contains('dropzone')) {
            event.target.style.background = "";
        }
    }

    dropHandler = (event) => {
       // event.preventDefault();
        if (event.target.classList.contains('dropzone')) {
            event.target.style.background = "";
            this.dragged.parentNode.removeChild(this.dragged);
            event.target.appendChild(this.dragged);
            this.setState({pos: event.target.getAttribute('data-pos')}, ()=>console.log(this.state));
        }
    }

    dragOver = (event) => {
        event.preventDefault();
    }

    render(){
        const rows = [];
        let columns = [];

        for(let row=0; row<4; row++){
            for(let col=0; col<4; col++){
                if(row===0 && col===0){
                    columns.push(<Column key={col+row} pos={`${row}`+`${col}`}><Draggable/></Column>);
                } else {
                    columns.push(<Column key={col+row} pos={`${row}`+`${col}`}></Column>);
                }
            }
            rows.push(<Row key={row}>{[...columns]}</Row>);
            columns = [];
        }
        
        return (
            <>
            <h1>Drag and Drop Component {this.state.pos}
            </h1>
            <div className="DragDrop" 
                onDrag={this.dragHandler}
                onDragStart={this.dragStartHandler}
                onDragEnd={this.dragEndHandler}
                onDragEnter={this.dragEnterHandler}
                onDragLeave={this.dragLeaveHandler}
                onDragOver={this.dragOver}
                onDrop={this.dropHandler}
            >
                {rows}
            </div>
            </>
        )
    }
}

export default DragDrop;