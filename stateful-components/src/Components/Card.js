import React from 'react';
import {formatImageUrl, getGradient} from '../Utilities/FormatData';
import './Card.scss';

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    handleLoad = (e) => {
        document.querySelector('.Card').classList.add('card-visible');
    }

    render(){
        const gradient = getGradient(this.props.types);
        const myStyle = {
            background: gradient
        };

        const gradient2 = getGradient(this.props.types, 90);
        const myStyle2 = {
            background: gradient2
        };

        const myImg = <img className="image" style={myStyle} src={formatImageUrl(this.props.id)} onLoad={this.handleLoad}></img>;

        return (
            <div className="Card smooth-card" key={this.props.id}>
                {this.props.id? 
                <>
                    <div className="title">
                        <h1 className="name">{this.props.name}</h1>
                        <p className="pokeId">{this.props.id}</p>
                    </div>
                    <div className="image-wrapper">
                        {myImg}
                    </div>
                    <p className="ability">Ability: {this.props.ability}</p>
                    <p className="types" style={myStyle2}>
                        {this.props.types.length > 1 ? 'Types: ':'Type: '}
                        {this.props.types.map((type)=>type).join(' ')}
                    </p>
                    <ul className="moves">
                        {this.props.moves.map((move, index)=><li key={index}>{move}</li>)}
                    </ul>
                </>
                : null}
            </div>
        )
    }
}

export default Card;