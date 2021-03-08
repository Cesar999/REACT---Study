import './withValidateInputs.css';

function WithValidateInputs(InputComponent){
    return class OutputComponent extends InputComponent {
        constructor(props){
            super(props);
            this.state = {
                message: '',
                valid: false
            }
        }

        onValidate = (inputState) => {
            const re = new RegExp(/\w{8}/);
            const username = inputState.username;
            const password = inputState.password;
            let validMessage = 'Valid:';
            let invalidMessage = 'Invalid:';
            if(re.test(username)){
                validMessage += ' username';
            } else {
                invalidMessage += ' username';
            }
            if(re.test(password)){
                validMessage += ' password';
            } else {
                invalidMessage += ' password';
            }
            const valid = re.test(username) && re.test(password);
            this.setState({message: valid?validMessage:invalidMessage, valid})
        };

        render(){
            const alertColor = this.state.valid?'rgb(72, 212, 53)':'red';
            const myStyle = {
                color: alertColor
            }
            return (
                <>
                    <h1>HOC: WithValidateInputs</h1>
                    <InputComponent onValidate={this.onValidate}></InputComponent>
                    <h2 className="validation-text" style={myStyle}>{this.state.message}</h2>
                </>
            )
        }
    }
}

export default WithValidateInputs;