import React, {Component} from 'react';
import './Form.css';

class FormComponent extends Component {
    constructor(){
        super();
        this.state = {
            username: 'Empty',
            gender: 'Other',
            pokemon: 'Pikachu',
            premium: 'No',
            legendary: 'No'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleChange = (e) => {
        if(e.target.id === 'premium' || e.target.id === 'legendary'){
            this.setState({[e.target.name]: e.target.checked?'Yes':'No'});
        } else {
            this.setState({[e.target.name]: e.target.value});
        }
    }

    render(){
        return (
            <div className="FormComponent">
                <h1>Form Component</h1>
                <form action="" id="myform" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange}/>

                    <fieldset className="row">
                        <input type="radio" id="male" name="gender" value="Male" onChange={this.handleChange}/>
                        <label htmlFor="male">Male</label>

                        <input type="radio" id="female" name="gender" value="Female" onChange={this.handleChange}/>
                        <label htmlFor="female">Female</label>

                        <input type="radio" id="other" name="gender" value="Other" onChange={this.handleChange}/>
                        <label htmlFor="other">Other</label>
                    </fieldset>

                    <fieldset className="row">
                        <label htmlFor="premium">Premium</label>
                        <input type="checkbox" id="premium" name="premium" onChange={this.handleChange}/>

                        <label htmlFor="legendary">Legendary</label>
                        <input type="checkbox" id="legendary" name="legendary" onChange={this.handleChange}/>
                    </fieldset>

                    <label htmlFor="pokemon">Pokemon</label>
                    <select id="pokemon" name="pokemon" onChange={this.handleChange} value={this.state.pokemon}>
                        <option value="Charmander">Charmander</option>
                        <option value="Squirtle">Squirtle</option>
                        <option value="Bulbasaur">Bulbasaur</option>
                        <option value="Eevee">Eevee</option>
                        <option value="Pikachu">Pikachu</option>
                    </select>

                    <input type="submit" value="Submit"/>
                </form>

                <div className="result">
                    <div className="username">
                        <p>Username: <span className="value">{this.state.username}</span></p>
                    </div>
                    <div className="gender">
                        <p>Gender: <span className="value">{this.state.gender}</span></p>
                    </div>
                    <div className="checkbox">
                        <div className="premium">P: {this.state.premium}</div>
                        <div className="legendary">L: {this.state.legendary}</div>
                    </div>
                    <div className="pokemon">
                        <p>Pokemon: <span className="value">{this.state.pokemon}</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormComponent;