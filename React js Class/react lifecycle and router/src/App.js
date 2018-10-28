// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import { BrowserRouter, Route ,withRouter } from 'react-router-dom';
// import Home from './Home';

// import ChildComponent from './ChildComponent';

// class App extends Component {
//   state = {
//     showChildComponent: true,
//     counter: 10,
//     error: null,
//   };
//   componentDidCatch(error) {
//     this.setState({
//       error: true,
//     });
//   }
//   componentDidMount() {
//     //
//     console.log('Component did Mount');
//   }

//   toggleChildComponent = () => {
//     this.setState({
//       showChildComponent: !this.state.showChildComponent,
//     });
//   };
//   counter = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   render() {
//     console.log('render Function');
//     if (this.state.error) {
//       return <h1>Error occured</h1>;
//     }
//     return (
//       <BrowserRouter>
//       <Route path="/" component={Home} />
    
    
    
//     </BrowserRouter>
//       // <div className="App">
//       //   <header className="App-header">
//       //     {this.state.showChildComponent ? <ChildComponent counter={this.state.counter}/> : null}
//       //     {/* <button onClick={this.toggleChildComponent}>Show Child</button> */}
//       //     <button onClick={this.counter}>Counter</button>
//       //   </header>
//       // </div>
//     );
//   }
// }

// export default App;




import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import User from './User';

import ChildComponent from './ChildComponent';

class App extends Component {
  state = {
    showChildComponent: true,
    counter: 10,
    error: null,
  };
  componentDidCatch(error) {
    this.setState({
      error: true,
    });
  }
  componentDidMount() {
    //
    console.log('Component did Mount');
  }

  toggleChildComponent = () => {
    this.setState({
      showChildComponent: !this.state.showChildComponent,
    });
  };
  counter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log('render Function');
    if (this.state.error) {
      return <h1>Error occured</h1>;
    }
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/user/:userId" exact component={User} />
          <Route path="/about" component={() => <h1>About Component</h1>} />
        </div>

      {/* <div className="App">
         <header className="App-header">
           {this.state.showChildComponent ? <ChildComponent counter={this.state.counter}/> : null}
           <button onClick={this.toggleChildComponent}>Show Child</button>
           <button onClick={this.counter}>Counter</button>
         </header>
       </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
