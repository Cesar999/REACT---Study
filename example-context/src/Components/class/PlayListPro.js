import React, {Component} from 'react';
import SongPro from './SongPro';

class PlayListPro extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="PlayListPro">
                <h2>PlayListPro</h2>
                <SongPro/>
            </div>
        )
    }
}

export default PlayListPro;