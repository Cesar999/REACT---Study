import React from 'react';
import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';
import Quotes from './Quotes';
import Movies from './Movies';
import Animes from './Animes';
import Books from './Books';
import Games from './Games';
import './MainComponent.css';
import Secret from './Private/Secret';

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log: 'False',
            navPush: '/'
        }
    }

    oldKey = '';

    componentDidMount(){
        localStorage.setItem('AUTH', false);
    }

	login = () => {
		localStorage.setItem('AUTH', true);
        this.setState({log: 'True'});
	}

	logout = () => {
		localStorage.setItem('AUTH', false);
		this.props.history.push('/');
        this.setState({log: 'False'});
	}

	authenticate = () => {
		const auth = localStorage.getItem('AUTH') === 'true';
		return auth;
	}

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    pushRoute = () => {
        console.log(this.props.history);
        this.props.history.push({
            pathname: this.state.navPush,
            state: { data: 'Some data' }
          });
    };

    render(){
        const PrivateRoute = ({ component: Component, ...rest }) => (
			<Route {...rest} render={(props) => (
				this.authenticate()
				? <Component {...props} />
				: <Redirect to='/' />
			)} />
		  );

          if(this.props.location.key !== this.oldKey) {
            console.log(this.props.location);
          }
          this.oldKey = this.props.location.key;

        return(
            <div className="MainComponent">
                <nav>
                    <NavLink exact activeClassName="active-link" to="/">Quotes</NavLink>
                    <NavLink exact activeClassName="active-link" to="/movies">Movies</NavLink>
                    <NavLink exact activeClassName="active-link" to="/animes">Animes</NavLink>
                    <NavLink exact activeClassName="active-link" to="/books">Books</NavLink>
                    <NavLink exact activeClassName="active-link" to="/games">Games</NavLink>
                    <NavLink exact activeClassName="active-link" to="/secret">Secret</NavLink>
                </nav>
				<hr/>
                <div className="menu">
                    <div className="auth">
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.logout}>Logout</button>
                        <div><strong>Logged: </strong>{this.state.log}</div>
                    </div>
                    <form className="navform" onSubmit={(e)=>e.preventDefault()}>
                        <input type="text" name="navPush" onChange={this.handleChange} placeholder="/animes/3"/>
                        <button onClick={this.pushRoute}>Push Route</button>
                    </form>
                </div>
				<hr/>
				<Switch>
					<Route exact path="/" component={Quotes}/>
					<Route path="/movies/:id?/:param?" component={Movies}/>
					<Route path="/animes/:id?/:param?" component={Animes}/>
					<Route path="/books/:id?/:param?" component={Books}/>
                    <Route path="/games/:id?/:param?" component={Games}/>
                    <PrivateRoute path='/secret' component={Secret} />
				</Switch>
            </div>
        )
    }
}

export default withRouter(MainComponent);