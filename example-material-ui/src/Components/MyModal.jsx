import React, { Component } from 'react';
import { Modal, Input, Button } from '@material-ui/core';
import './MyModal.scss';

class MyModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            move: '',
            level: 1,
            ID: 0,
            open: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const {name, move, level, ID} = this.props;
        if(this.props.name !== prevProps.name){
            this.setState({name, move, level, ID});
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, move, level, ID} = this.state;
        this.setState({name: '', move: '', level: 1}, ()=> {
            if(this.state.ID === 0){
                this.props.addData(name, move, level);
            } else {
                this.props.updateData(name, move, level, ID);
            }
            this.props.handleClose();
        }); 
    }

    render(){
        const centerModal = {
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        };
        return (
            <div className="MyModal">
                <Button variant="contained" color="primary" onClick={this.props.handleOpen}>
                    Add
                </Button>
                <Modal style={centerModal} open={this.props.open} onClose={this.props.handleClose}>
                    <form className="MyForm" onSubmit={this.handleSubmit}>
                        <Input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
                        <Input type="text" name="move" placeholder="move" value={this.state.move} onChange={this.handleChange}/>
                        <Input type="number" name="level" placeholder="level" value={this.state.level} onChange={this.handleChange}/>
                        {this.state.ID===0 ?
                            <Button type="submit" variant="contained" color="primary">Add</Button>
                            :
                            <Button type="submit" variant="contained" color="primary">Update</Button>
                        }
                    </form>
                </ Modal>
            </div>
        )
    }
}

export default MyModal;