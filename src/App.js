import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import { getUserData } from './config/helper';
class App extends Component {
  constructor() {
    super();

    this.state = {
      user1: '',
      user2: '',
      isDone: false,
    };
  }

  onInputHandler = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    if (this.state.isDone) {
      return (
        <div>
          <Button text="Rematch" onClick={this.reStart} />
        </div>
      );
    }
    return (
      <div className="App">
        <form onSubmit={this.getUserDataHandler}>
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

  reStart = () => {
    this.setState({
      isDone: false,
    });
  };
  getUserDataHandler = event => {
    event.preventDefault();

    if (this.state.user1 === '' || this.state.user2 === '') {
      alert('Please fill this form');
      return;
    }
    const usersData = Promise.all([
      getUserData(this.state.user1),
      getUserData(this.state.user2),
    ]);

    usersData
      .then(res => {
        this.setState({
          isDone: true,
        });

        // total 
        //following
        //follower
        //public_repos
        //public_gists
        console.log(res);
      })
      .catch(error => console.log(error));
    // getUserData(this.state.user1)
    //   .then(user1 => {
    //     console.log('Start Second call');
    //     getUserData(this.state.user2)
    //       .then(user2 => console.log(user1, user2))
    //       .catch(error => console.error(error));
    //   })
    //   .catch(error => console.error(error));

    //https://api.github.com/users/userId
    console.log(this.state);
  };
}

export default App;
