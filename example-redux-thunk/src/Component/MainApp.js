import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import ShowData from './ShowData';
import {postUser, getUser} from '../Store/actions';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import './MainApp.css';

const selector = formValueSelector('simple');

class MainApp extends Component {
    constructor(props){
        super(props);
    }

    sendFormToApi = values =>{
        console.log(values);
        this.props.postUser(values);
    }

    getUser = () => {
        this.props.getUser(this.props.username);
    }

    render(){
        return(
            <div className="MainApp">
                <SimpleForm sendFormToApi={this.sendFormToApi}/>
                <hr />
                <ShowData {...this.props.currentUser}/>
                <button onClick={this.getUser}>Get User by Username from API</button>
                <div className="list">
                    <h3>State List</h3>
                    {this.props.users.map((item, i)=><div className="item" key={i}>{item.username}</div>)}
                </div>
            </div>)
    }
}

const mapStateToprops = state => {
	return {
        users: state.users.users,
        currentUser: state.users.currentUser,
        username: selector(state, 'username')
    };
}

const mapDispatchToProps = {postUser, getUser};

export default connect(mapStateToprops, mapDispatchToProps)(MainApp);
