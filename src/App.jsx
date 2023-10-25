//rce for creating class component

import React, { Component } from 'react';

class Hello extends Component{
  render(){
    // console.log(this.props);
    const {name} = this.props;
    return(
      <p>Hello {name}</p>
    )
  }
}



class App extends Component {
  render() {
    return (
      <div>
        <Hello name ='Dinesh!'/>
      </div>
    )
  }
}

export default App;

