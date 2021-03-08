import React, {Component} from 'react';

class Display extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.message === 'Error'){
            throw 'I crashed';
        }
        return null;
    }

    render(){
        return (
            <div className="Display">
                {this.props.message}
            </div>
        )
    }
}

export default Display;