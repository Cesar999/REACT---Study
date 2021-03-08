import React, {Component} from 'react';
import './MouseEvents.css';

class MouseEvents extends Component {
    constructor(){
        super();
        this.state = {
            type: 'None'
        }
    }

    hanldeClick = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleFocus = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleBlur = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleMouseDown = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleMouseUp = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleMouseEnter = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    handleMouseLeave = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }
    doubleClickHanlder = (e) => {
        console.log(e.type);
        this.setState({type: e.type});
    }

    render(){
        return (
            <div className="MouseEvents">
                <div tabIndex="1" className="magik" onClick={this.hanldeClick} onFocus={this.handleFocus} onBlur={this.handleBlur} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onDoubleClick={this.doubleClickHanlder}>{this.state.type} </div>
            </div>
        )
    }
}

export default MouseEvents;