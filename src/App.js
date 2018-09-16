import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user1: 'User 1',
      user2: ' USer 2',
    };
  }

  onInputHandler = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <form>
          <Input
            name="user1"
            inputHandler={this.onInputHandler}
            value={this.state.user1}
            label="User 1"
            placeholder="User 1 Name"
          />
          <Input
            name="user2"
            inputHandler={this.onInputHandler}
            value={this.state.user2}
            label="User 2"
            placeholder="User 2 Name"
          />
          <Button text="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default App;
