// state : state refer to the data
// that is used to manage and represent the internal state of the component.
// it allows the component to keep track of and manage their own data -> the data will change
// over the time as a result of user interactions, data fetch or other factors.

// whenever the state of the component changes, it will cause re-rendering of the components


import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);// to call the parent class constructor.

    // define the state
    this.state={
      count:0      
    }

  }  

 increment = ()=>{
    // update the state (data) of the count
    this.setState({
      // provide the new state
      count:this.state.count+1,
    })
  }
  decrement =()=>{
    this.setState({
      count:this.state.count-1,
    })
  }

  reset =()=>{
    this.setState({
      count:0,
    })
  }

  render() {
    return (
      <div>
        <p>Count :{this.state.count}</p>
        <button onClick = {this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>reset</button>
        </div>
    )
  }
}

export default App;

