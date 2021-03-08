import React, {Component} from 'react';
import WithValidateInputs from '../HighOrderComponents/withValidateInputs';

class FormComponent extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    timer = null;

    handleChange = (e) => {
        console.log('FORM');
        this.setState({[e.target.name]: e.target.value},
            ()=>{
                clearInterval(this.timer);
                this.timer = setTimeout(()=>{
                    this.props.onValidate(this.state);
                }, 500);
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="FormComponent">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" name="username" type="text" onChange={this.handleChange}/>

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" onChange={this.handleChange}/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default WithValidateInputs(FormComponent);