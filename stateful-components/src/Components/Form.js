import React, {Component} from 'react';
import {getData} from '../Api/Api';
import {formatData, getRandomId} from '../Utilities/FormatData';
import './Form.scss';

class From extends Component {
	constructor(props){
		super(props);
	}

	handleSubmit = (e) => {
		e.preventDefault();
        const newId = getRandomId();
        getData(newId)
        .then(data => {
            const poke = formatData(data);
           	this.props.handleStatePoke(poke);
        })
        .catch(e=>console.log(e));
	}

	render(){
		return (
			<div className="Form">
				<form className="getForm" onSubmit={this.handleSubmit}>
					<button>Get Random Pokemon</button>
				</form>
			</div>
		) 
	}
}

export default From;