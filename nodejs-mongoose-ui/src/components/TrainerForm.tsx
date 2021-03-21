import React, {Component} from 'react';
import { createTrainer } from '../Api/api';
import './TrainerForm.scss';

interface State {
    name: string,
    age: number
}

class TrainerForm extends Component<{updateTrainer: any}, State> {
    constructor(props: any){
        super(props);
        this.state = {
            name: '',
            age: 0,
        }
    }

    handleNameChange = (e: any) => {
        this.setState({name: e.target.value});
    }
    handleAgeChange = (e: any) => {
        this.setState({age: e.target.value});
    }

    handelSubmit = async (e: any) => {
        e.preventDefault();
        await createTrainer(this.state.name, this.state.age);
        await this.props.updateTrainer();
    }

    render(){
        return (
            <form onSubmit={this.handelSubmit}>
                <input type="text" name="name" onChange={this.handleNameChange} value={this.state.name}/>
                <input type="number" name="age" onChange={this.handleAgeChange} value={this.state.age}/>
                <button>Create Trainer</button>
            </form>
        )
    }

}

export default TrainerForm;