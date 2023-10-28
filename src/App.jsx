/*
what is Hook?
- any function that start with "use" is called a hook.
- they are special functions that are avaliable only while React is rendering.
- To create a counter, where the value is increased as a function of time or at the click of the button.
*/ 

import React from 'react';
import { useState } from 'react';

function App() {
  const[counter,setCounter] = useState(0);
  function handleclick(){
    setCounter(counter+1);

  }
  function Minusbuttonclick(){
    setCounter(counter -1);
  }
  
  function zerobuttonclick(){
    setCounter(0);
  }
  return (
    <div>
      <p> counter:{counter} </p>
      <button onClick={handleclick}>plus</button>
      <button onClick={Minusbuttonclick}>Minus</button>
      <button onClick={zerobuttonclick}>Zero</button>
      </div>
  )
}

export default App;