import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Input ></Input>
        <Button text="Button 1" className="btn btn-primary"/>
        <Button text="Button 2" className="btn btn-secondary"/>
        <Button text="Button 3" className="btn btn-danger"/>
        </p>
      </div>
    );
  }
}

export default App;
