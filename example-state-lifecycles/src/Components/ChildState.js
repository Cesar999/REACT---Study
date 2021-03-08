import React from 'react';
import './ChildState.css';

class ChildState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: 'Charmander'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value}, ()=>{
            this.props.onState(this.state.pokemon);
        });
    }

    render(){
        return(<div className="ChildState">
            <label htmlFor="pokemon">Pokemon</label>
            <h2>{this.state.pokemon} displayed on Child</h2>
            <select id="pokemon" name="pokemon" onChange={this.handleChange} value={this.state.pokemon}>
                <option value="Charmander">Charmander</option>
                <option value="Squirtle">Squirtle</option>
                <option value="Bulbasaur">Bulbasaur</option>
                <option value="Eevee">Eevee</option>
                <option value="Pikachu">Pikachu</option>
            </select>
            
        </div>)
    }
}

export default ChildState;