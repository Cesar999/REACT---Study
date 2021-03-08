import React, {Component} from 'react';
import './Amount.css';

class Amount extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        amount: 0,
      };
    }
   
    onIncrement = () => {
      this.setState(state => ({ amount: state.amount + 1 }));
    };
   
    onDecrement = () => {
      this.setState(state => ({ amount: state.amount - 1 }));
    };
   
    render() {
      return (
        <div className="Amount">
          <span>US Dollar: {this.state.amount} </span>
   
            <div>
                <button type="button" onClick={this.onIncrement}> + </button>
                <button type="button" onClick={this.onDecrement}> - </button>
            </div>

            <hr/>

          {this.props.render(this.state.amount)}

        </div>
      );
    }
  }

export default Amount;