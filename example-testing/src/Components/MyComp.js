import React from 'react';

class MyComp extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            output: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({output: this.state.username});
    }

    render(){
        return (
            <div className="MyComp">
                <form className="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" id="username" onChange={this.handleChange} value={this.state.username}/>
                    <button>Display Username</button>
                </form>
                <div className="output">{this.state.output}</div>
            </div>
        )
    }
}


export default MyComp;