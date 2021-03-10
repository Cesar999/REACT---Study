import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser, postUser, deleteUser } from './Store/action';
import './MainApp.css';

class MainApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            userID: 0,
            username: '',
            birthDay: '',
            position: ''
        }
    }

    ID_COUNTER = 4;

    handleGetSubmit = (e) => {
        e.preventDefault();
        this.props.getUser(this.state.userID);
    }
    handlePostSubmit = (e) => {
        e.preventDefault();
        const {username, birthDay, position} = this.state;
        this.props.postUser({username, birthDay, position, id: this.ID_COUNTER++});
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: parseInt(e.target.value)});
    }

    render(){
        return(
            <div className="MainApp">
                <form className="PostForm" onSubmit={this.handlePostSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" id="username" onChange={this.handleChange} value={this.state.username}/>

                    <label htmlFor="birthDay">BirthDay</label>
                    <input name="birthDay" type="date" id="birthDay" onChange={this.handleChange} value={this.state.birthDay}/>
                    
                    <label htmlFor="position">Position</label>
                    <input name="position" type="text" id="position" onChange={this.handleChange} value={this.state.position}/>

                    <button>Post User</button>
                </form>
                <hr/>
                <form className="GetForm" onSubmit={this.handleGetSubmit}>
                    <label htmlFor="userID">Username ID</label>
                    <input type="number" name="userID" id="userID" onChange={this.handleChange} value={this.state.userID}/>
                    <button>Get User</button>
                </form>
                {this.props.error===''?null:<div className="error">{this.props.error}</div>}
                <hr />
                {this.props.users.map((user)=>{
                    return (
                        <div key={user.id} className="userItem">
                            <div><strong>Username: </strong>{user.username}</div>
                            <div><strong>BirthDay: </strong>{user.birthDay}</div>
                            <div><strong>Position: </strong>{user.position}</div>
                            <button onClick={()=>this.props.deleteUser(user.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        error: state.error
    }
}

const mapDispatchToProps = { getUser, postUser, deleteUser };

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);