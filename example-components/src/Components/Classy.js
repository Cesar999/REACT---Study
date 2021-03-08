import './Classy.css';
import React, {Component} from 'react';

class Classy extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Classy">
                <h1>I am a Class Component</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }

}

export default Classy;