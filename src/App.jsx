import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [count,setCount]=useState(0);
 
  useEffect(()=>{
    document.title = `count:${count}`
  },[count])

  const handleclick=()=> {
    setCount(count + 1)
  }
  
  return (
    <div>
      <h2>Document title</h2>
      <button onClick={ handleclick }>Change count</button>
    </div>
  )
}

export default App;