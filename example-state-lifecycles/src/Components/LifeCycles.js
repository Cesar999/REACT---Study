import React, {Component} from 'react';
import Display from './Display';

class LifeCycles extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps', props, state);
        return {message: props.message };
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className="LifeCycles">
                <h1>LifeCycles</h1>
                <Display message={this.state.message}/>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentDidCatch(){
        console.log('componentDidCatch');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

}

export default LifeCycles;


