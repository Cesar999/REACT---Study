import React, {Component} from 'react';
import Todo from './Todo';
import './TodoList.css';

import {addTodo, deleteTodo, completeTodo} from '../Store/actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            formText: '',
            formDate: ''
        }
        this.ID_COUNTER = 4;
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    createTodo = (e) => {
        e.preventDefault();
        if(this.state.formText === '') return;
        if(this.state.formDate === '') return;
        const newTodo = {text: this.state.formText, date: this.state.formDate, done: false, id: this.ID_COUNTER++};
        this.props.addTodo(newTodo);
        this.setState({formText: '', formDate: ''});
    }

    render(){
        return (
            <div className="TodoList">
                <form className="createTodo" onSubmit={this.createTodo}>
                    <input type="text" name="formText" onChange={this.handleChange} value={this.state.formText}/>
                    <input type="date" name='formDate' onChange={this.handleChange} value={this.state.formDate} />
                    <button>Create Todo</button>
                </form>
                <hr/>
                {this.props.todos.map(todo=>{
                    return (<Todo key={todo.id} {...todo} deleteTodo={this.props.deleteTodo} completeTodo={this.props.completeTodo}/>);
                })}
            </div>
        )
    }
}

const mapStateToprops = state => {
	return {todos: state.todos};
}

const mapDispatchToProps = {addTodo, deleteTodo, completeTodo};

export default connect(mapStateToprops, mapDispatchToProps)(TodoList);