/*
what is Hook?
- any function that start with "use" is called a hook.
- they are special functions that are avaliable only while React is rendering.
- To create a counter, where the value is increased as a function of time or at the click of the button.
*/ 



import React, { useState } from 'react';

function App() {
 const[counter,setCounter] = useState(0);
 function plusbuttonclick(){
  setCounter(counter+1);
 }
  return (
    <div>
      <p>counter:{ counter }</p>
      <button onClick={plusbuttonclick}>Plus</button>
    </div>
  )
}

export default App;