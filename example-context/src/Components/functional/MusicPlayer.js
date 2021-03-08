import PlayList from './PlayList';
import {useState} from 'react';
import {SongsProvider} from '../contexts/SongsContext';
import songsList from '../data/songsList';
import './MusicPlayer.css';

function MusicPlayer(){
    const [song, setSong] = useState(songsList[0]);
    const getRandomSong = () => {
        const index = Math.floor(songsList.length * Math.random());
        setSong(songsList[index]);
    };

    return (
        <div className="MusicPlayer">
            <SongsProvider value={{song}}>
                <h1>MusicPlayer</h1>
                <button onClick={getRandomSong}>Random Song</button>
                <PlayList />
            </SongsProvider>
        </div>
    )
}

export default MusicPlayer;