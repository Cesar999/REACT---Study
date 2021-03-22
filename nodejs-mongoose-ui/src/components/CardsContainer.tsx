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
    trainers: any[],
    loading: boolean
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
            trainers: [],
            loading: false
        }
    }

    async componentDidMount(){
        try{
            const pokemon: Pokemon = await getRandomPokemon();
            await this.setState({currentPokemon: pokemon})
            await this.updateTrainer();
            if(this.state.trainers.length>0){
                await this.updateTeam(this.state.trainers[0].name);
            }
        }
        catch(e) {
            console.error(e);
        }
    }

    updateTrainer = async () => {
        try{
            const data = await getAllTrainers()
            await this.setState({trainers: data});
            await this.updateTeam(this.state.trainers[0].name);
        }
        catch(e) {
            console.error(e);
        }

    }

    updateTeam = async (trainerName: string) => {
        try{
            const currentTrainer = await getTrainer(trainerName);
            const {name, age, _id, team} = currentTrainer;
            await this.setState({currentTrainer: {name, age, _id}, myTeam: team});
        }
        catch(e) {
            console.error(e);
        }
    }

    handleCurrentPokemon = async () => {
        try{
            await this.setState({loading: true});
            const pokemon: Pokemon = await getRandomPokemon();
            await this.setState({currentPokemon: pokemon, loading: false});   
        }
        catch(e) {
            console.error(e);
        }
    }

    handleSelect = async (e: any) => {
        this.updateTeam(e.target.value);
    }

    catchPokemon = async() => {
        try{
            await savePokemon(this.state.currentTrainer.name, this.state.currentPokemon.id);
            await this.updateTeam(this.state.currentTrainer.name);
            await this.handleCurrentPokemon();    
        }
        catch(e) {
            console.error(e);
        }

    }

    releasePokemon = async (pokemonID: number) => {
        try{
            await deletePokemon(this.state.currentTrainer.name, pokemonID);
            await this.updateTeam(this.state.currentTrainer.name);
        }
        catch(e) {
            console.error(e);
        }
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
                <div className="menu">
                    {this.state.loading?<div className="lds-ripple"><div></div><div></div></div>:<button onClick={this.handleCurrentPokemon}>Get Random Pokemon</button>}
                </div>
                <hr/>
                <div className="cardsWrapper">
                    <div className="currentPokemon">
                        <h1>Wild Pokemon</h1>
                        <Card {...this.state.currentPokemon}/>
                        {this.state.loading?<div className="lds-ripple"><div></div><div></div></div>: <button className="catch" onClick={this.catchPokemon}>Catch</button>}
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