//rce for creating class component

import React, { Component } from 'react';

class Hello extends Component{
  render(){
    return(
      <p>Hello world!</p>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
      </div>
    )
  }
}

export default App;

