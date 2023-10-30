/*
what is Hook?
- any function that start with "use" is called a hook.
- they are special functions that are avaliable only while React is rendering.
- To create a counter, where the value is increased as a function of time or at the click of the button.
*/ 

import React from 'react';
import { useState } from 'react';
import Displaycount from './Components/Displaycount';
import Button from './Components/button';


function App() {
  const[counter,setCounter] = useState(0);
  function handleplusclick(){
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
      <Displaycount counter ={counter}/>
      <Button handleclick={handleplusclick} name='plus'/>
      <Button handleclick={Minusbuttonclick} name='minus'/>
      <Button handleclick={zerobuttonclick} name='zero'/>
      </div>
  )
}

export default App;