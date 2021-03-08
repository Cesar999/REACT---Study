import React, {Component} from 'react';
import PlayListPro from './PlayListPro';
import songsList from '../data/songsList';
import {SongsProvider} from '../contexts/SongsContext';
import './MusicPlayerPro.css';

class MusicPlayerPro extends Component {
    constructor(){
        super();
        this.state = {
            song: songsList[0]
        }
    }

    getRandomSong = () => {
        const index = Math.floor(songsList.length * Math.random());
        this.setState({song: songsList[index]});
    };

    render(){
        return (
            <div className="MusicPlayerPro">
                <h1>MusicPlayerPro</h1>
                <button onClick={this.getRandomSong}>Random Song</button>
                <SongsProvider value={{song: this.state.song}}>
                    <PlayListPro />
                </SongsProvider>
            </div>
        )
    }
}

export default MusicPlayerPro;