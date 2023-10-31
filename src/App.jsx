

/*props drilling: props drilling occurs when you need to pass down the data 
through multiple nested components to reach the ones that require the data. */

import React, { useState } from 'react';

function Grandchildcomponent({data}){
  console.log(`GrandChild received from parentdata:${data}`)
 
  return(
    <div>
      <h2>Grandchildcomponent</h2>

    </div>

  )
}

function Childcomponent({data}){
  console.log(data);
  return(
    <div>
   <h2>Child component</h2>
    <Grandchildcomponent data ={data}/>
    </div>
    )
}

function App() {
   const parentdata =` Hello from the parent`;
  //const[value,setValue]=useState(` Hello from the parent`);// useing useState method.
  return (
    <div>
      <h2>Parent component</h2>
        <Childcomponent data={parentdata}/>

    </div>
  )
}

export default App;