import React, {Component} from 'react';
import './Game.css';

class Game extends Component {
    constructor(props){
        super(props);
    }

    getRotation = () => {
        switch(this.props.control){
            case 'left':
                return 0;
            case 'up':
                return 90;
            case 'right':
                return 180;  
            case 'down':
                return 270;   
        }
    }

    render(){
        let deg = 0;
        deg = this.getRotation();
        const myRotation = {
            transform: `rotate(${deg}deg)`
        }
        return (
            <div className="Game">
                <div className="arrow" style={myRotation}></div>
            </div>
        )
    }
}

export default Game;