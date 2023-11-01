import React from 'react';
import { useState } from 'react';

//child component 
// Receive the child as a data props.
function Hello({data}){
  return(
    <div>Hello{data}</div>
  )
}

// parent component
function App() {

  const [data,setData] = useState(`dinesh`);
  return (
    <div>
      <Hello data={data}/>
    </div>
  )
}

export default App;