import React from 'react';
import Pokemon from '../Utilities/utilities';
import './Card.scss';

function Card(props:Pokemon){
    return (
        <div className="Card">
            <div className="title">
                <h1 className="name">{props.name}</h1>
                <p className="pokeId">{props.id}</p>
            </div>
            <div className="image-wrapper">
            <img className="image" src={props.url}></img>
            </div>
            <p className="ability">Ability: {props.ability}</p>
            <p className="types">
                {props.types.length > 1 ? 'Types: ':'Type: '}
                {props.types.map((type:string)=>type).join(' ')}
            </p>
            <ul className="moves">
                {props.moves.map((move:string, index:number)=><li key={index}>{move}</li>)}
            </ul>
        </div>
    )
}

export default Card;