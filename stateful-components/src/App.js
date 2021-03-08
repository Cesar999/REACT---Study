import React from 'react';
import './App.scss';
import Form from './Components/Form';
import Card from './Components/Card';
import {getGradient} from './Utilities/FormatData';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPoke: {
        name: '',
        id: 0,
        ability: '',
        moves: ['', '', '', ''],
        types: ['', '']
      },
      myPokes: [],
      pokeballs: 6
    }

  }

  handleStatePoke = (poke) => {
    this.setState({currentPoke: {...poke}});
  }

  checkRepeated = () => {
    for(let poke of this.state.myPokes){
      console.log()
      if(poke.id == this.state.currentPoke.id){
        return false;
      }
    }
    return true
  }

  selectPoke = (id) => {
    let temp = {};
    for(let poke of this.state.myPokes){
      if(poke.id == id){
        temp = poke;
      }
    }
    this.setState({currentPoke: {...temp}}, ()=>{
      //console.log(this.state, 'select');
    });
  }

  catchPokemon = () => {
    if(this.state.pokeballs > 0 && this.checkRepeated()){
      this.setState(()=>{
        return {
          myPokes: [...this.state.myPokes, this.state.currentPoke], 
          pokeballs: this.state.pokeballs - 1
        }
      }, 
      () => {
        //console.log(this.state, 'catch');
      });
    } else {
      alert(this.state.pokeballs < 0 ? 'You dont have any pokeball left' : 'You cant capture the same pokemon');
    }
  }

  render(){
    return (
      <div className="App">
        <div className="menu">
          <Form handleStatePoke={this.handleStatePoke} />
          <button onClick={this.catchPokemon}>Catch</button>
          <div className="pokeballs">Pokeballs: {this.state.pokeballs}</div>
        </div>

        <Card {...this.state.currentPoke} />

        <ul className="mypokemon">
            {this.state.myPokes.map((poke)=>{
              const gradient = getGradient(poke.types);
              const myStyle = {
                    background: gradient
              };
              return (<li 
                key={poke.id} 
                style={myStyle}
                onClick={this.selectPoke.bind(this, poke.id)}>
                  {poke.name}
                </li>);
            })
          }
        </ul>

      </div>
    );
  }
}

export default App;
