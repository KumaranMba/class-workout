// class components lifecycle
// create(mount,render)---> update(re-render)--->remove(delete) 

import { Component } from "react";


class App extends Component{

  // component did mount : called after the component has been render to the DOM.
  
  componentDidMount(){
    console.log('component is mounted');
  }

  //called immediately after the component is updated in the DOM
  // called on state of prop changes.
  componentDidUpdate(){
    consolelog('component state update')
    }

  componentWillUnmount(){
    //invoked just before the comonent is removed from the dom
    //releasing memory or resources
    //detaching the events
    //cancelling timers
  }

  render(){
   return(
    <div>
      <p>Hello world!</p>
    </div>
   )
    
  }
}

export default App;

/*components lifecycle: The different states/stages a component takes from getting created and render in the Dom 
to getting removed from the Dom */
