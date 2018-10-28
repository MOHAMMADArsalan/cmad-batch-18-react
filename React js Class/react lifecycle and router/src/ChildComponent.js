import React from 'react';

let interval;

class ChildComponent extends React.Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      counter: props.counter,
    };
  }
  // componentDidMount() {
  //  interval =  setInterval(() => {
  //     console.log(this.counter++);
  //   },1000)
  // }

  static getDerivedStateFromProps(nextProps, previousState) {
    if(nextProps.counter) {
      return {
        counter: nextProps.counter
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps,previousState) {
    if(nextProps.counter) {
      if(nextProps.counter % 2 === 0) {
        return true;
      }
      return null
    }
    return null;
  }
  componentWillUnmount() {
    clearInterval(interval);

    console.log('Component Will Unmount');
  }

  render() {
    console.log(this.props);
    return <h1>{this.state.counter}</h1>;
  }
}

export default ChildComponent;
