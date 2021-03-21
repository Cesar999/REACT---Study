import React, {Component} from 'react';
import {getRandomPokemon, getAllTrainers, getTrainer, savePokemon, deletePokemon} from '../Api/api';
import Pokemon from '../Interfaces/interfaces';
import Card from './Card';
import TrainerForm from './TrainerForm';
import './CardsContainer.scss';

interface State {
    currentPokemon: Pokemon,
    currentTrainer: any,
    myTeam: any
    trainers: any[]
}

class CardContainer extends Component<{}, State>{
    constructor(props: any){
        super(props);
        this.state = {
            currentPokemon: {
                name: '',
                level: 1,
                ability: '',
                moves: ['','','',''],
                types: ['',''],
                id: 151
            },
            myTeam: [],
            currentTrainer: {
                name: '',
                age: 0,
                _id: ''
            },
            trainers: []
        }
    }

    async componentDidMount(){
        const pokemon: Pokemon = await getRandomPokemon();
        await this.setState({currentPokemon: pokemon})
        await this.updateTrainer();
        await this.updateTeam(this.state.trainers[0].name);
    }

    updateTrainer = async () => {
        const data = await getAllTrainers()
        this.setState({trainers: data});
    }

    updateTeam = async (trainerName: string) => {
        const currentTrainer = await getTrainer(trainerName);
        const {name, age, _id, team} = currentTrainer;
        await this.setState({currentTrainer: {name, age, _id}, myTeam: team});
    }

    handleCurrentPokemon = async () => {
        const pokemon: Pokemon = await getRandomPokemon();
        this.setState({currentPokemon: pokemon})
    }

    handleSelect = async (e: any) => {
        this.updateTeam(e.target.value);
    }

    catchPokemon = async() => {
        await savePokemon(this.state.currentTrainer.name, this.state.currentPokemon.id);
        await this.updateTeam(this.state.currentTrainer.name);
        await this.handleCurrentPokemon();
    }

    releasePokemon = async (pokemonID: number) => {
        await deletePokemon(this.state.currentTrainer.name, pokemonID);
        this.updateTeam(this.state.currentTrainer.name);
    }

    render(){
        return(
            <div className="CardContainer">
                <TrainerForm updateTrainer={this.updateTrainer}/>
                <form>
                    <select onChange={this.handleSelect} value={this.state.currentTrainer.name}>
                        {this.state.trainers.map((item:any, index:number)=><option key={index} value={item.name}>{item.name}</option>)}
                    </select>
                </form>
                <h1>{this.state.currentTrainer.name}</h1>
                <hr/>
                <button onClick={this.handleCurrentPokemon}>Get Random Pokemon</button>
                <hr/>
                <div className="cardsWrapper">
                    <div className="currentPokemon">
                        <h1>Wild Pokemon</h1>
                        <Card {...this.state.currentPokemon}/>
                        <button className="catch" onClick={this.catchPokemon}>Catch</button>
                    </div>
                    <div className="teamPokemon">
                        <h1>My Team</h1>
                        <div className="teamCardsWrapper">
                            {this.state.myTeam.map((item:Pokemon, index:number)=><Card key={index} {...item} releasePokemon={this.releasePokemon}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CardContainer;