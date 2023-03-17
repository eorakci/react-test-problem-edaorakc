import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      default: !prevState.default
    }));
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.handleClick}>
        {this.state.default ? 'click me' : 'thanks'}
      </button>
      </div>
    );
  }
}