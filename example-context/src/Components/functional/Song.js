import SongsContext, {SongsConsumer} from '../contexts/SongsContext';
import {useContext} from 'react';

function Song(){
    const value = useContext(SongsContext);

    return (
        <div className="Song">
            <h3>Song</h3>
            <div className="wrapper"> 
                <h4>useContext Hook</h4>
                <div><strong>Title: </strong>{value.song.title}</div>
                <div><strong>Author: </strong>{value.song.author}</div>
                <div><strong>Duration: </strong>{value.song.duration}s</div>
            </div>

            <SongsConsumer>
                {(val) => {
                    console.log(val, 'Song');
                    return (
                        <div className="wrapper">  
                            <h4>SongsConsumer</h4>
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

export default Song;