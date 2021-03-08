import React, {Component} from 'react';
import SongsContext, {SongsConsumer} from '../contexts/SongsContext';

class SongPro extends Component {
    constructor(){
        super();
    }

    static contextType = SongsContext;

    render(){
        console.log(this.context, 'this.context SongPro');
        return (
            <div className="SongPro">
                <h3>SongPro</h3>

                <div className="wrapper"> 
                    <h4>this.context</h4>
                    <div><strong>Title: </strong>{this.context.song.title}</div>
                    <div><strong>Author: </strong>{this.context.song.author}</div>
                    <div><strong>Duration: </strong>{this.context.song.duration}s</div>
                </div>

                <SongsConsumer>
                    {(val) => {
                        console.log(val, 'SongsConsumer SongPro')
                        return (
                            <div className="wrapper">
                                <h4>Songs Consumer</h4>
                                <div><strong>Title: </strong>{val.song.title}</div>
                                <div><strong>Author: </strong>{val.song.author}</div>
                                <div><strong>Duration: </strong>{val.song.duration}s</div>
                            </div>
                        )
                    }}
                </SongsConsumer>
            </div>
        )
    }
}

export default SongPro;