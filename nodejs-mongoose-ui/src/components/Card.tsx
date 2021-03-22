import React, {Component} from 'react';
import Pokemon from '../Interfaces/interfaces';
import './Card.scss';

function getGradient(types: any, deg = 135){
    const colors: any = {
        ghost: '#1f2077',
        poison: '#9718b1',
        fire: '#ff6600',
        fighting: '#c51515',
        dark: '#363636',
        flying: '#aa8be4',
        ground: '#85462d',
        dragon: '#583099',
        normal: '#ebd6f0',
        rock: '#ac7a42',
        bug: '#679c43',
        steel: '#929292',
        water: '#3d68f8',
        grass: '#35b10f',
        electric: '#deec1c',
        psychic: '#e20bac',
        ice: '#88effd',
        fairy: '#fd88e0'
    };
    if(types.length === 2) {
        return `linear-gradient(${deg}deg, ${colors[types[0]]}, ${colors[types[1]]}`;
    } else {
        return `linear-gradient(${deg}deg, ${colors[types[0]]} 66%, white`;
    }
}

class Card extends Component<Pokemon, {}>{
    constructor(props: Pokemon){
        super(props);
    }

    formatImageUrl = (id: number) => {
        if(id<10){
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`
        }
        else if(id<100){
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
        } else {
            return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
        }
    }

    render(){
        const gradient = getGradient(this.props.types);
        const myStyle = {
            background: gradient
        };
        return(
            <div className="Card" style={{width: '200px'}}>
                <div className="title">
                    <h1 className="name">{this.props.name}</h1>
                    <p className="pokeId">{this.props.id}</p>
                </div>
                <div className="image-wrapper" style={myStyle}>
                    <img className="image" width="150px" src={this.formatImageUrl(this.props.id)}></img>
                </div>
                <p className="ability">Ability: {this.props.ability}</p>
                <p className="types" style={myStyle}>
                    {this.props.types.length > 1 ? 'Types: ':'Type: '}
                    {this.props.types.map((type:string)=>type).join(' ')}
                </p>
                <ul className="moves">
                    {this.props.moves.map((move:string, index:number)=>{
                        const mymoves = move.split('/');
                        let symbol = null;
                        if(mymoves[3]==='physical') {
                            symbol = <span>&#10040;</span>
                        } else if(mymoves[3]==='special'){
                            symbol = <span>&#9673;</span>
                        } else {
                            symbol = <span>&#9681;</span>
                        }
                        return <li style={{background: getGradient([mymoves[2]])}} key={index}>{symbol}{` ${mymoves[0]}: ${mymoves[1]}`}</li>
                    })}
                </ul>
                {this.props.releasePokemon?<button className="release" onClick={()=>this.props.releasePokemon(this.props.id)}>Release</button>:null}
            </div>
        )
    }

}

export default Card;