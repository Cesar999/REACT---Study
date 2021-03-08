import React, {Component} from 'react';
import './RequestData.css';
import getDataFromServer from '../FakeApi.js/Api';
import withLoadingApi from '../HighOrderComponents/withLoadingApi';

class RequestData extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            birth: '',
            corp: '',
            position: '',
            personID: 0
        }
    }

    requestData = () => {
        this.props.onLoad(true);
        getDataFromServer(this.state.personID)
        .then((data)=>{
            const {username, birth, corp, position} = data;
            this.setState({username, birth, corp, position}, ()=>this.props.onLoad(false, this.state));
        });
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="RequestData">
                <label htmlFor="personID">Person ID </label>
                <input type="number" name="personID" id="personID" min="0" max="4" value={this.state.personID} onChange={this.handleChange}/>
                <button onClick={this.requestData}>Request</button>
                {this.props.children}
            </div>
        )
    }

}

export default withLoadingApi(RequestData);