import React, {Component} from 'react';
import Game from './Game';
import LifeCycles from './LifeCycles';
import './State.css';

class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            textcontent: 'Initial Text',
            quantity: 1,
            control: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    counterAction = (action) => {
        if(action === 'increase'){
            this.setState(()=>({count: this.state.count + parseInt(this.state.quantity)}));
        } else if (action === 'decrease'){
            this.setState(()=>({count: this.state.count - parseInt(this.state.quantity)}));
        } else {
            console.log('Nothin happen');
        }
    }

    gameAction = (action) => {
        this.setState(()=>({control: action}), ()=>console.log(action));
    }

    sendMessage = () => {
        this.setState({message: this.state.textcontent});
    };

    render() {
        return (
            <div className="State">
                <div className="count-wrapper">
                    <p>{this.state.count}</p> 
                    <input type="number" id="number" name="quantity" onChange={this.handleChange} value={this.state.quantity}/>
                    <div className="buttons">
                        <button onClick={this.counterAction.bind(this, 'increase')}>+</button>
                        <button onClick={this.counterAction.bind(this, 'decrease')}>-</button>
                    </div>
                </div>

                <div className="text-wrapper">
                    <p>{this.state.textcontent}</p> 
                    <input type="text" id="text" name="textcontent" onChange={this.handleChange}/>
                    <button onClick={this.sendMessage}>Send</button>
                </div>

                <div className="control">
                    <button onClick={this.gameAction.bind(this, 'up')}>Up</button>
                    <button onClick={this.gameAction.bind(this, 'down')}>Down</button>
                    <button onClick={this.gameAction.bind(this, 'left')}>Left</button>
                    <button onClick={this.gameAction.bind(this, 'right')}>Right</button>
                </div>
                <Game control={this.state.control}/>
                <hr/>
                {this.state.message === ''?null:<LifeCycles message={this.state.message}/>}
            </div>
        )
    }
}

export default State;
