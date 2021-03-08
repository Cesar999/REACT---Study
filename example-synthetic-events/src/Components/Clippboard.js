import React, {Component} from 'react';

class Clippboard extends Component {
    constructor(){
        super();
        this.state = {
            alert: 'None'
        }
    }

    copyHandler = (e) => {
        const promise = navigator.clipboard.readText();
        promise.then(text=>this.setState({alert: `Copy: ${text}`}));
    }

    pasteHandler = (e) => {
       const promise = navigator.clipboard.readText();
       promise.then(text=>this.setState({alert: `Paste: ${text}`}));
    }

    cutHandler = (e) => {
        const promise = navigator.clipboard.readText();
        promise.then(text=>this.setState({alert: `Cut: ${text}`}));
     }

    render() {
        return (
            <div className="Clippboard">
                <h1>Clippboard Component</h1>
                <h2>{this.state.alert}</h2>
                <div className="paste">
                    <textarea cols="10" rows="4" defaultValue="Default value" onPaste={this.pasteHandler} onCut={this.cutHandler} onCopy={this.copyHandler}>
                    </textarea>
                </div>
            </div>
        )
    }
}

export default Clippboard;
