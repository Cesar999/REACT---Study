import './withLoadingApi.css';

function withLoadingApi(InputComponent){
    return class OutputComponent extends InputComponent {
        constructor(props){
            super(props);
            this.state = {
                loading: false,
                initial: true,
                username: '',
                birth: '',
                corp: '',
                position: '',
            }
        }
        
        handleLoad = (flag, inputState) => {
            
            if(flag){
                this.setState({initial: false, loading: flag});
            } else {
                const {username, birth, corp, position} = inputState;
                this.setState({loading: flag, username, birth, corp, position});
            }
            
        }

        render(){
            const dataElement = ( 
                <div className="data">
                    <div><strong>Username: </strong>{this.state.username}</div>
                    <div><strong>Birth: </strong>{this.state.birth}</div>
                    <div><strong>Corp: </strong>{this.state.corp}</div>
                    <div><strong>Position: </strong>{this.state.position}</div>
                </div>);
            const loadingElement = ( 
                <div className="loading">
                    <h1>LOADING...</h1>
                </div>);

            return (
                <>
                    <h1>HOC: withLoadingApi</h1>
                    {this.state.loading? <InputComponent onLoad={this.handleLoad}>{loadingElement}</InputComponent>:<InputComponent onLoad={this.handleLoad}>{dataElement}</InputComponent>}
                </>
            )
        }
    }
}

export default withLoadingApi;