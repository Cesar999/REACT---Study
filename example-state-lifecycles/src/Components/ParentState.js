import React from 'react';
import ChildState from './ChildState';
import './ParentState.css';

class ParentState extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Parent state',
            child: ''
        }
    }

    handleState = (newState) => {
        this.setState({child: newState + ' displayed on Parent'});
    }

    render(){
        return(<div className="ParentState">
            <h1>{this.state.title}</h1>
            {this.state.child===''?null:<h1>{this.state.child}</h1>}

            <ChildState onState={this.handleState}/>
        </div>)
    }
}

export default ParentState;