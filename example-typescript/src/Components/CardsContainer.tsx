import React, {Component} from 'react';
import Card from './Card';
import Pokemon from '../Utilities/utilities';
import './CardsContainer.scss';
import {getAllTeam, getPoke, getRandomPoke, postPoke, deletePoke, putPoke} from '../Api/api'

interface State {
    currentCard: Pokemon,
    myTeam: [],
    teamid: number
}

class CardsContainer extends Component<{}, State>{
    constructor(props:any){
        super(props);
        this.state = {
            currentCard: {
                name:'', 
                id:0, 
                ability: '',
                types: ['', ''],
                moves: ['', ''],
                url: ''
            },
            myTeam: [],
            teamid: 0
        }
    }

    componentDidMount(){
        this.getRandom();
    }

    handleChange = (e:any) => {
        this.setState({teamid: parseInt(e.target.value)});
    }

    getRandom = async () => {
        const poke = await getRandomPoke();
        this.setState({currentCard: poke});
    }

    getPokemonFromTeam = async () => {
        const poke = await getPoke(this.state.teamid);
        this.setState({currentCard: poke});
    }

    getAllPokeTeam = async () => {
        const res = await getAllTeam();
        this.setState({myTeam: res.team});
    }

    postCurrentPoke = async () => {
        const flag = await postPoke(this.state.currentCard);
        console.log(flag, 'post');
    }

    deletePokemon = async () => {
        const flag = await deletePoke(this.state.teamid);
        console.log(flag, 'delete');
    }

    putPokemon  = async () => {
        const flag = await putPoke(this.state.currentCard, this.state.teamid);
        console.log(flag, 'put');
    }

    render(){
        return(
            <div className="CardsContainer">
                <div className="currentCard">
                    <h1>Current</h1>
                    <Card {...this.state.currentCard}/>
                </div>
                <div className="menu">
                    <button onClick={this.getRandom}>Get Random Pokemon</button>
                    <button onClick={this.postCurrentPoke}>Post Current Pokemon</button>
                    <input type="number" name="teamid" min="0" max="5" onChange={this.handleChange} value={this.state.teamid}/>
                    <button onClick={this.getPokemonFromTeam}>Get from my Team</button>
                    <button onClick={this.deletePokemon}>Delete from Team</button>
                    <button onClick={this.putPokemon}>Put from Team</button>
                    <button onClick={this.getAllPokeTeam}>Get My Team</button>
                </div>
                <div className="myTeamContainer">
                    <h1>My Team</h1>
                    <div className="myTeam">
                        {this.state.myTeam.map((item:Pokemon, index:number)=><Card key={index}{...item}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsContainer;