import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props);
  var gotoAbout =  ()  => {
    setTimeout(() => {
      props.history.push('/about')
    },2000)
  }
  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={gotoAbout}>
      About Page
      </button>
    </div>
  );
};

export default Home;

