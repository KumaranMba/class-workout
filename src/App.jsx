//Functional component
//created as javascript functions
//it should return the jsx=>Html with javascript embaded.

// function App() {
//   return (
//     <div>Hello World!</div>
//   )
// }

// export default App;

//--------------------------------------------------//

// Class component
import { Component } from "react"; // automatically received from the react library.
class App extends Component{
  render(){
    return(
      <div>Hello world!</div>
    )
  }
}

export default App;
