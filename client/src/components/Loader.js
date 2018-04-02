import React, { Component } from 'react';
import spinner from '../spinner.svg';

class Loader extends Component {
  render() {  
    return (
      <div className="text-center spinner">
        <img src={spinner} alt="spinner"/>
      </div>
    );
  }
}

export default Loader;
